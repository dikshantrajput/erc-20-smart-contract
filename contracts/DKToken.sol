//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";

contract DKToken is ERC20Capped{
    address private owner;
    
    constructor(uint256 _cap) ERC20("Dikshant","DK") ERC20Capped(_cap) {
        owner = msg.sender;
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner,"err : not the owner");
        _;
    }
    
    function generateTokens(uint256 tokens_count) public onlyOwner{
        _mint(owner,tokens_count);
    }

}
