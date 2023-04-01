const config = {}

config.hosts = {
  main: {
    test: false,
    rpcUri: 'https://mainnet.infura.io/v3/23d48449322b4cdb8dbeb8e3da9c72eb',
    explorerUri: 'https://etherscan.io',
    chainId: 1,
    confirmation: 15
  },
  goerli: {
    test: true,
    rpcUri: 'https://goerli.infura.io/v3/23d48449322b4cdb8dbeb8e3da9c72eb',
    explorerUri: 'https://goerli.etherscan.io',
    chainId: 5,
    confirmation: 2
  },
  sepolia: {
    test: true,
    rpcUri: 'https://sepolia.infura.io/v3/23d48449322b4cdb8dbeb8e3da9c72eb',
    explorerUri: 'https://sepolia.etherscan.io',
    chainId: 11155111,
    confirmation: 2
  }
}

module.exports = exports = config
