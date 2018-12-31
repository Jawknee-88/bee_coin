const BN = require('bn.js');

const BeeCoin = artifacts.require('BeeCoin');

require('chai')
  .use(require('chai-bn')(BN))
  .should();  //Chai is an assertion framework.

contract('BeeCoin', accounts => {
  const _name = 'Test Name';
  const _symbol = 'xyz';
  const _decimals = 8;

  beforeEach(async function() {
    this.token = await BeeCoin.new(_name, _symbol, _decimals) //Async await pattern. Waits for the contract to be created and assigned to the variable before continuing execution.
  })

  describe('Token attributes', function() {
    it('has the correct name', async function() {
      const name = await this.token.name();
      name.should.equal(_name);
    });

    it('has the correct symbol', async function() {
      const symbol = await this.token.symbol();
      symbol.should.equal(_symbol)
    });

    it('has the correct decimals', async function() {
      const decimals = await this.token.decimals();
      decimals.should.be.a.bignumber.that.equals(_decimals.toString());
    });
  })
})