const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DKToken", function () {
  it("Should return the new greeting once it's changed", async function () {
    const DKToken = await ethers.getContractFactory("DKToken");
    const dKToken = await DKToken.deploy(100);
    await dKToken.deployed();

    expect(await dKToken.cap()).to.equal(100);

  });

  it("Should mint tokens in users account", async function () {
    const DKToken = await ethers.getContractFactory("DKToken");
    const dKToken = await DKToken.deploy(100);
    await dKToken.deployed();

    const [owner,addr] = await ethers.getSigners();

    const tx = await dKToken.connect(owner).generateTokens(50);
    await tx.wait();

    expect(await dKToken.connect(owner).balanceOf(owner.address)).to.equal(50);
    
  });

  it("Should transfer from owner account to users", async function () {
    const DKToken = await ethers.getContractFactory("DKToken");
    const dKToken = await DKToken.deploy(100);
    await dKToken.deployed();

    const [owner,addr] = await ethers.getSigners();

    let tx = await dKToken.connect(owner).generateTokens(50);
    await tx.wait();

    tx = await dKToken.connect(owner).transfer(addr.address,40);
    await tx.wait()

    expect(await dKToken.connect(owner).balanceOf(owner.address)).to.equal(10);
    expect(await dKToken.connect(owner).balanceOf(addr.address)).to.equal(40);
    expect(await dKToken.totalSupply()).to.equal(50);

  });
});
