const hre = require("hardhat")

async function main() {
    const CrowdFunding = await hre.ethers.getContractFactory("CrowdFunding")
    const crowdFunding = await CrowdFunding.deploy()
    await crowdFunding.deployed()
    console.log(`Crowdfunding deployed to ${crowdFunding.address}`)
}

main().catch((error) => {
    console.log(error)
    process.exitCode = 1
})