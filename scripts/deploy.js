// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

//mumbai -> 0xECD48cfDdCB9875383fAdaD6bBB018B667B32dC3
async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const DKToken = await hre.ethers.getContractFactory("DKToken");
  const dKToken = await DKToken.deploy('2000000000000000000000');

  await dKToken.deployed();

  console.log("Greeter deployed to:", dKToken.address);
  const tx = await dKToken.generateTokens('2000000000000000000000');
  let txReceipt = await tx.wait()
  console.log(txReceipt);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
