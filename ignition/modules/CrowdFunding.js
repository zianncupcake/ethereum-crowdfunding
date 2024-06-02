const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("CrowdFundingModule", (m) => {
  // Deploy the CrowdFunding contract
  const crowdFunding = m.contract("CrowdFunding");

  // Optionally, you can call a function after deployment
  // For example, you can create a campaign after deploying the contract
  // Uncomment the lines below if needed

  // m.call(crowdFunding, "createCampaign", [
  //   "0xYourAddressHere", // _owner
  //   "Sample Campaign",   // _title
  //   "Description of the campaign", // _description
  //   1000,                // _target
  //   Math.floor(Date.now() / 1000) + 3600 // _deadline (current time + 1 hour)
  // ]);

  return { crowdFunding };
});
