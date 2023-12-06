require("@nomicfoundation/hardhat-toolbox");


const PRIVATE_KEY = "701ae303a92191fb9440f3cb2bff48ba1ffc4425219d5b2b37fef3dcb1582d34";

const RPC = "https://rpc.ankr.com/polygon_mumbai";

module.exports = { 
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {
      chainId: 80001,
    },
    polygon_mumbai: {
      url: "https://rpc.ankr.com/polygon_mumbai",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      }
    }
  }
}






/** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.18",
// };
// https://shy-late-energy.matic-testnet.quiknode.pro/27405b75db90fd0d9c0c2d29ab31c398445d4b71/