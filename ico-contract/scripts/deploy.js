const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { LUNA_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
    // Address of the Luna NFT contract that you deployed in the previous module
    const lunaNFTContract = LUNA_NFT_CONTRACT_ADDRESS;

    /*
    A ContractFactory in ethers.js is an abstraction used to dep1oy new smart contracts,
    so lunaTokenContract here is a factory for instances of our CryptoDevToken contract.
    */
    const lunaTokenContract = await ethers.getContractFactory("LunaToken");

    // deploy the contract
    const deployedLunaTokenContract = await lunaTokenContract.deploy(
        lunaNFTContract
    );

    await deployedLunaTokenContract.deployed();
    // print the address of the deployed contract
    console.log(
        "Luna Token Contract Address:",
        deployedLunaTokenContract.address
    );
}

// Call the main function and catch if there is any error
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
