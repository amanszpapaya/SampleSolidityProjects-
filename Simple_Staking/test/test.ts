import chai, { expect } from "chai";
import { BigNumber, Signer } from "ethers";
import { solidity } from "ethereum-waffle";
import { ethers } from "hardhat";
import {HDToken} from "../typechain-types/contracts/Simple_Token.sol";
import {Staking} from "../typechain-types/contracts/Staking";

describe ("Tests for Simple Staking App", ()=>{
   // Variables
   let accounts: Signer[];
   let staker1: Signer;
   let staker2: Signer;
   let deployer_acc: Signer;
   let stakingToken: HDToken;
   let rewardToken: HDToken;
   let staking: Staking;

    beforeEach(async()=> {
        accounts = await ethers.getSigners();
        deployer_acc = accounts[0]; 
        const TenBillion = ethers.utils.parseEther("10000000000");
        
        // Deploy Token to be Staked & Mint an Initial Amount
        const stakingTokenProxy = await ethers.getContractFactory("HDToken");
        stakingToken = await stakingTokenProxy.deploy("STAK", "ST", TenBillion);
        await ethers.provider!.waitForTransaction(stakingToken.deployTransaction.hash); // Wait for token to be Deployed

        // Deploy Reward Token
        const rewardTokenProxy = await ethers.getContractFactory("HDToken");
        rewardToken = await rewardTokenProxy.deploy("REW", "RW", TenBillion);
        await ethers.provider!.waitForTransaction(rewardToken.deployTransaction.hash); // Wait for token to be Deployed

        // Deploy Staking Contract
        const stakingProxy =  await ethers.getContractFactory("Staking");
        staking = await stakingProxy.deploy(rewardToken.address);

        // Create Staker Accounts and Give Them Funds
        staker1 = accounts[1];
        staker2 = accounts[2];
        
        let transaction = await stakingToken.increaseAllowance(staker1.getAddress(), ethers.utils.parseEther("1000"));
        await transaction.wait();
        transaction = await stakingToken.connect(staker1).mint(staker1.getAddress(), ethers.utils.parseEther("1000"));
        await transaction.wait();

        transaction = await stakingToken.increaseAllowance(staker2.getAddress(), ethers.utils.parseEther("1000"));
        await transaction.wait();

        await stakingToken.connect(staker2).mint(staker2.getAddress(),ethers.utils.parseEther("1000"));
        await transaction.wait();

        // Add Staking Token to Allowed Tokens 
        transaction = await staking.addAlowedTokens(stakingToken.address);
        await transaction.wait();
    });

    it("Owner can Add New Allowed Tokens to the System",  async function (){
        // Create a New Token (To Be Added)
        const TenBillion = ethers.utils.parseEther("10000000000");
        const newTokenProxy = await ethers.getContractFactory("HDToken");
        const newToken = await newTokenProxy.deploy("NewToken", "NT", TenBillion);
        // Add Newly Created Token to Allowed Tokens
        let transaction = await staking.addAlowedTokens(newToken.address);
        await transaction.wait();
        // Check
        let isTokenAllowed = await staking.getTokenStatus(newToken.address);
        console.log(isTokenAllowed);
        expect(isTokenAllowed).to.be.eq(true);
    });

    it("A Normal User cannot Add New Allowed Tokens to the System",  async function (){
        // Create a New Token
        const TenBillion = ethers.utils.parseEther("10000000000");
        const newTokenProxy = await ethers.getContractFactory("HDToken");
        const newToken = await newTokenProxy.deploy("NewToken", "NT", TenBillion);
        // Try to Add the Token
        await expect(staking.connect(staker1).addAlowedTokens(stakingToken.address)).to.be.reverted;
    });

    it("A User Stakes funds to the system", async function(){
        let staker1Balance = await stakingToken.connect(staker1).balanceOf(staker1.getAddress());
        console.log(`Initial Staker1 Balance : ${staker1Balance}`); 
        let transaction = await staking.connect(staker1).stake(stakingToken.address, ethers.utils.parseEther("500"));
        await transaction.wait();
        let finalBalance = await stakingToken.connect(staker1).balanceOf(staker1.getAddress());
        console.log(`Final Staker1 Balance : ${finalBalance}`);
        expect(finalBalance).to.be.equal(ethers.utils.parseEther("500")); 
    });

    it("A User Unstakes Some of the Staked Funds from the system", async function(){
        // First User Stakes Some Amount to the System 
        let transaction = await staking.connect(staker1).stake(stakingToken.address, ethers.utils.parseEther("500"));
        await transaction.wait();
        // Now User Unstakes the Some of the Staked Tokens
        transaction = await staking.connect(staker1).unstake(stakingToken.address, ethers.utils.parseEther("250"));
        // Print for the Reward Tokens
        let rewardBalance = await rewardToken.connect(staker1).balanceOf(staker1.getAddress());
        console.log(`Acquried Reward Token : ${rewardBalance}`);
        // Final Check
        let balance = await stakingToken.connect(staker1).balanceOf(staker1.getAddress());
        expect(balance).to.be.equal(ethers.utils.parseEther("750")); 
    });

    it("A User Unstakes All of the Staked Funds from the system", async function(){
        // First User Stakes Some Amount to the System 
        let transaction = await staking.connect(staker1).stake(stakingToken.address, ethers.utils.parseEther("500"));
        await transaction.wait();
        // Now User Unstakes the Some of the Staked Tokens
        transaction = await staking.connect(staker1).unstake(stakingToken.address, ethers.utils.parseEther("500"));
        // Print for the Reward Tokens
        let rewardBalance = await rewardToken.connect(staker1).balanceOf(staker1.getAddress());
        console.log(`Acquried Reward Token : ${rewardBalance}`);
        // Final Check
        let balance = await stakingToken.connect(staker1).balanceOf(staker1.getAddress());
        expect(balance).to.be.equal(ethers.utils.parseEther("1000")); 
    });

    it("A User Withdraws his/her Rewards from the Contract ", async function(){
        // First User Stakes Some Amount to the System 
        let transaction = await staking.connect(staker1).stake(stakingToken.address, ethers.utils.parseEther("500"));
        await transaction.wait();
        // Now User Unstakes the Some of the Staked Tokens
        transaction = await staking.connect(staker1).witdrawRewards(stakingToken.address);
        // Print for the Reward Tokens
        let rewardBalance = await rewardToken.connect(staker1).balanceOf(staker1.getAddress());
        console.log(`Acquried Reward Token : ${rewardBalance}`);
        // Final Check
        expect(rewardBalance).to.be.equal(ethers.utils.parseEther("2.5")); 
    });
});