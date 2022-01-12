
const hre = require("hardhat");

const main =  async () =>  {
 
      const ArnoldMart = await hre.ethers.getContractFactory("ArnoldMart");
      const am = await ArnoldMart.deploy();
      await am.deployed();
      console.log("ArnoldMart deployed to:", am.address);
}


const runMain = async () => {
  try {
      await main();
      process.exit(0);

  } catch (error) {

    console.error(error)
    process.exit(1) 

  
  }

}

runMain();
