import { ethers, upgrades } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Upgrading contracts with the account:", deployer.address);

  // Get the ContractFactory for the new implementation
  const ERC721AI = await ethers.getContractFactory("ERC721AI");

  // Address of the existing proxy contract (replace with your actual proxy address)
  const proxyAddress = "0xYourProxyAddress";

  // Upgrade the contract
  const upgraded = await upgrades.upgradeProxy(proxyAddress, ERC721AI);
  console.log("ERC721AI upgraded at:", upgraded.address);

  // Wait for the upgrade to be mined
  await upgraded.deployed();
  console.log("ERC721AI successfully upgraded!");
}

// Run the script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error during upgrade:", error);
    process.exit(1);
  });
