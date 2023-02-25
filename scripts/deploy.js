const hre = require("hardhat");

async function main() {
  const PAMP = await hre.ethers.getContractFactory("PAMP");
  const pamp = await PAMP.deploy();

  await pamp.deployed();

  console.log(` deployed contract Address ${pamp.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
