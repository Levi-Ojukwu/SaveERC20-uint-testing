import { ethers } from "hardhat";

async function main() {
  const ERCAddress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";

  const saveERC20 = await ethers.deployContract("SaveERC20", [ERCAddress]);

  await saveERC20.waitForDeployment();

  console.log(
   `Contract has been deployed to ${saveERC20.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
