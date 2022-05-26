# erc-20-smart-contract
A basic ERC 20 token contract

Steps to deploy the contarct on mumbai (polygon testnet) and test :
* Clone the repo
* cd to the folder && run npm install
* run npx hardhat
* copy the .env.example file and name it .env and set the required variables
* run npx hardhat compile
* run npx hardhat run --network mumbai scripts/deploy.js
