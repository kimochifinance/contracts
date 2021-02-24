const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    dev: {
      host: "localhost",
      port: 7545,
      network_id: "*", // Match any network id
      gas: 5000000
    },
	bsctest: {
      provider: () => new HDWalletProvider(``, `https://data-seed-prebsc-2-s2.binance.org:8545`),
      network_id: 97,
      timeoutBlocks: 200,
      skipDryRun: true
    },
	bsc: {
      provider: () => new HDWalletProvider(``, `https://bsc-dataseed.binance.org/`),
      network_id: 56,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: "0.6.12",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};
