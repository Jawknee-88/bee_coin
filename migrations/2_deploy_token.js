var BeeCoin = artifacts.require("./BeeCoin.sol");

module.exports = function(deployer) {
  const _name = "Bee Coin";
  const _symbol = "BEE"
  const _decimals = 18
  deployer.deploy(BeeCoin, _name, _symbol, _decimals);
};
