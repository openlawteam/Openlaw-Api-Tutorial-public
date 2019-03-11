var BillOfSale = artifacts.require("./BillOfSale.sol");
module.exports = function(deployer) {
  deployer.deploy(BillOfSale);
};