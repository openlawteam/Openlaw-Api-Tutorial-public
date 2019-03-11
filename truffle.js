require('dotenv').config();
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = process.env["MNEMONIC"];
var infuraKey = process.env["INFURA_API_KEY"];
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  //https://truffleframework.com/docs/truffle/getting-started/truffle-with-metamask
  //add solc optimizer
    solc: {
    optimizer: {
      enabled: true,
      runs: 2000
    }
  },
   //default -- contracts_build_directory:"./build/contracts",
 // contracts_build_directory:"./client/src/contracts",
  networks: {
    ganache: {
      host: "localhost",
      port: 8545,
      network_id: "*" // match any network
    },
    rinkeby: {
      //wrap provider in function to avoid crashing
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/" + infuraKey);
      },
      host: "localhost",
      //port: 8545,
      network_id: 4, //rinkeby test network
      gas:  4000000, // Gas limit used for deploys
      gasPrice : 1000000000
    }
  }
};