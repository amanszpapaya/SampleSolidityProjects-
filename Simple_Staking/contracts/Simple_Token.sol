// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";


contract HDToken is ERC20, ERC20Burnable {
    using SafeERC20 for ERC20;

    // Constructor
    constructor(string memory name, string memory symbol, uint256 initialSupply) ERC20(name, symbol){
            _mint(msg.sender, initialSupply);
    }

    function burn(address addr, uint256 amount) external {
        super._burn(addr, amount);
    }
    function mint(address addr, uint256 amount) external{
        super._mint(addr, amount);
    }
}