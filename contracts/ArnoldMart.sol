//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

// create struct that represents assest ticket
// create function that lists all tickets sold 
// create function that lists all remaining tickets 
// create function that return all assests sold on blockchain 
// Use Counter class
// Use Security Reentry 
// import NFT library 
// create mapping of address to ticket id sold 


contract ArnoldMart {

    string private greeting;

    constructor(string memory _greeting) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }
}
