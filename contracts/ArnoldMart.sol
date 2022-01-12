//SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.3;


// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// import "hardhat/console.sol";

contract ArnoldMart {
    
  address payable owner;
  address  payable  acc2 = payable(0xbDA5747bFD65F08deb54cb465eB87D40e51B197E);
  TicketSale[] purchasedTickets;

  constructor() {owner = payable(msg.sender);
  
  } 

  struct TicketSale {
    string ticketid;
    address buyer;
    uint ticketPrice;   
    bool sold;
  }

  mapping(string => TicketSale) private buyerTicketMapping;

  event Sold(address buyer, string ticketId, uint price);

  function  makeSale(string  memory id) public payable {
      buyerTicketMapping[id] = TicketSale(id,msg.sender,msg.value,true);
      purchasedTickets.push(TicketSale(id,msg.sender,msg.value,true));      
      acc2.transfer(msg.value);
      emit Sold(msg.sender, id, msg.value);

  }



}
