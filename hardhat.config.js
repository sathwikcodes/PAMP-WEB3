require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/8Xk7fJaD1qur5ByES5zPIVco3wS7pzPc",
      accounts: [
        `0x${"6383f0ad1f9d502a3870e2114f5903f2c5806fc6bcd18dafdac252f6daf8d31d"}`,
      ],
    },
  },
};

