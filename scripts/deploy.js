const hre = require("hardhat");

async function main() {


  const EtherTalk = await hre.ethers.getContractFactory("EtherTalk");
  const etherTalk = await EtherTalk.deploy();

  await etherTalk.deployed();

  console.log(`contract Address:  ${etherTalk.address}`)

 
}
 
main().catch((error) => {
  console.error(error); 
  process.exitCode = 1;
});
