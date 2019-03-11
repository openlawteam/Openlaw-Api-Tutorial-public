pragma solidity ^0.5.0;
contract BillOfSale {
  address payable public seller;
  address public buyer;
  string public descr;
  uint public price;
  bool public confirmed;
  //from OpenLaw Template
  function recordContract(string memory _descr, uint _price,
    address payable _seller, address _buyer
  ) public {
    descr = _descr;
    price = _price;
    seller = _seller; 
    buyer = _buyer;
  }
function () external payable { }
function confirmReceipt() public payable {
    require(msg.sender == buyer, "only buyer can confirm");
    require(address(this).balance == price, "purchase price must be funded");
    address(seller).transfer(address(this).balance);
    confirmed = true;
  }
}