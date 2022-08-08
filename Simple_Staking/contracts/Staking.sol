// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

import "./Simple_Token.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Staking is Ownable {
    using SafeERC20 for IERC20;

    struct Stake{
        address token;
        uint256 amount;
        uint256 reward;
    }

    /* Constants */
    uint256 constant REWARD_DENOMINATOR = 200;

    /* Variables */
    address[] private stakeHolders;
    mapping(address => bool) private isStakeHolder;
    HDToken immutable rewardToken;
    mapping(address => Stake[])  private userStakes; 
    mapping(address => bool) private allowedTokens;

    /* Modifiers */
    modifier isStaker(address _stakeHolder){
        require(isStakeHolder[_stakeHolder], "Not a Registered Stake Holder...");
        _;
    }

    
    modifier isAllowedToken(address _token){
        require((allowedTokens[_token] && _token != address(0)), "Token is not Recognized ...." );
        _;
    }

    /* Constructor */
    constructor(address _rewardToken){
        rewardToken = HDToken(_rewardToken);
    }

    /* Methods */

    /// @notice Function that registers stakers to the system 
    /// @param _user : the address of the new staker 
    function addStakeHolder(address _user) internal{
        require(_user != address(0));
        stakeHolders.push(_user);
        isStakeHolder[_user] = true;
    }

    /// @notice Removes an existing stake holder from the system
    /// @param _user : address of a registered user
    function removeStakeHolder(address _user) internal isStaker(_user){
        isStakeHolder[_user] = false;
        for (uint256 i = 0; i < stakeHolders.length; i++) {
            if(stakeHolders[i] == _user){
                stakeHolders[i] = stakeHolders[stakeHolders.length - 1];
                stakeHolders.pop();
            }
        }
    }

    /// @notice Check if the user has staked that kind of token before. Will be used during stake()
    /// @param _token: Token to be checked
    function istokenStakedBefore(address _token) internal returns(bool){
        uint256 length = userStakes[msg.sender].length;
        if (length == 0){
            return false;
        }
        else{
            for (uint256 i = 0; i < length; i++) {
                if(userStakes[msg.sender][i].token == _token){
                    return true;
                }
            }
            return false;
        }
    }

    /// @notice Returns the related staking record
    /// @param _token: Token to be checked
    function findStakingRecord(address _token) public returns(uint256){
        uint256 length = userStakes[msg.sender].length;
        for (uint256 i = 0; i < length; i++) {
            if(userStakes[msg.sender][i].token == _token){
                return i;
            }
        }
    }

    /// @notice Stake Tokens into the System
    /// @param _token : type of token being staked
    /// @param amount: amount of _token being staked
    function stake(address _token, uint256 amount) external isAllowedToken(_token){
        require( amount > 0, "Insufficient Amount ...");
        _stake(_token, amount);
    }

    /// @notice Stake Tokens into the System (Core Logic)
    /// @param _token : type of token being staked
    /// @param amount : amount of _token being staked
    function _stake(address _token, uint256 amount) internal{
        // Check if Token is already Registered
        bool isRegistered = istokenStakedBefore(_token);
        // If token is not registered, Register it
        if(!isRegistered){
            // Register user to the System
            isStakeHolder[msg.sender] = true;
            addStakeHolder(msg.sender);
            Stake memory tmp;
            tmp.token = _token;
            tmp.amount = amount;
            tmp.reward = 0;
            userStakes[msg.sender].push(tmp);
        }
        else{
            // Find Related Staking Record and Update it
            uint256 stakeIndex = findStakingRecord(_token);
            Stake storage stakeRecord = userStakes[msg.sender][stakeIndex];
            stakeRecord.amount += amount;
            // Do a Final Check on the isStaker Status
            if(!isStakeHolder[msg.sender]){
                isStakeHolder[msg.sender] = true;
            }
        }
        // Lock user funds
        HDToken(_token).burn(msg.sender, amount);
    }

    /// @notice Unstake amount of tokens from the system
    /// @param _token : type of token being unstaked
    /// @param amount : amount of _token being unstaked 
    function unstake(address _token, uint256 amount) external isAllowedToken(_token){
        require(amount > 0, "Insufficient Amount...");
        _unstake(_token, amount);
    }

    function _unstake(address _token, uint256 amount)internal {
        uint256 stakeIndex =  findStakingRecord(_token);
        Stake storage record = userStakes[msg.sender][stakeIndex];
        require(record.amount > 0, "Invalid Record...");
        uint256 stakedAmount = record.amount;
        uint256 rewardAmount = calculateAndUpdateReward(_token, amount);
        record.reward -= rewardAmount;
        // If a Partial amount is being unstaked
        if(stakedAmount > amount){
            // Deduct Staked Amount from the total 
            record.amount -= amount;
        }
        else{
            // Delete Related Record
            uint usersRecordLength = userStakes[msg.sender].length;
            if (usersRecordLength == 1){
                // Delete User Completely
                removeStakeHolder(msg.sender);
                delete userStakes[msg.sender];
            }
            else{ // Just Delete Related Record
                for (uint256 i = 0; i < usersRecordLength; i++) {
                    if(userStakes[msg.sender][i].token == _token){
                        userStakes[msg.sender][i] = userStakes[msg.sender][usersRecordLength-1];
                        userStakes[msg.sender].pop();
                    }
                }
            }
        }
        // Mint and Send Staked Amount back to User
       HDToken( _token).mint(msg.sender, amount);
        
        // Send Earned Rewards So Far
        HDToken(rewardToken).mint(msg.sender, rewardAmount);
    }

    /// @notice Add _token to allowed tokens
    /// @param _token : token to be allowed
    function addAlowedTokens(address _token) external onlyOwner{
        require(_token != address(0));
        allowedTokens[_token] = true ;
    }

    /// @notice Remove token from allowed tokens
    /// @param _token : allowed token to be removed
    function removeFromAllowedTokens(address _token) external onlyOwner isAllowedToken(_token) {
        delete allowedTokens[_token];
    }

     /// @notice Calculates and updates reward token for deposited token 
    /// @param _token : token to be used 
    function calculateAndUpdateReward(address _token, uint256 amount) public  returns(uint256){
        uint256 stakeIndex= findStakingRecord(_token);
        Stake storage record = userStakes[msg.sender][stakeIndex];        
        uint256 result =  amount / REWARD_DENOMINATOR;
        record.reward += result;
        return result;
    }

    function witdrawRewards(address _token) external isAllowedToken(_token) isStaker(msg.sender){
        uint256 rewardAmount = calculateAndUpdateReward(_token,  HDToken(_token).balanceOf(msg.sender));
        uint256 stakeIndex= findStakingRecord(_token);
        Stake storage record = userStakes[msg.sender][stakeIndex];
        record.reward = 0;
        rewardToken.mint(msg.sender,rewardAmount);
    }

    function getTokenStatus(address _token) external view returns(bool){
        return allowedTokens[_token];
    } 
}