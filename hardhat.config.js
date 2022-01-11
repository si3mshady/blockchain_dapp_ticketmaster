//https://eth-ropsten.alchemyapi.io/v2/0ticHtAIa7_ntr_e4-wc9CWZtWbHnynp
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/0ticHtAIa7_ntr_e4-wc9CWZtWbHnynp',
      accounts: ['40de229a2f03663d921e2cbbf58988e92a26b29d4168b3dece8e6c0c7de3aef4']
    }
  }
}

// accounts is metamask account private key 
// url is provided from Alchemy.io 