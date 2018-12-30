# BeeCoin
This is a project which defines and deploys an Ethereum ERC-20 token.

## How To's
### Run local ETH blockchain
`node_modules/ganache-cli/cli.js`

### Deploy to blockchain
`truffle migrate --reset`

### Interact with the smart contract
`truffle console`

`BeeCoin.deployed().then((instance) => { bee = instance; })`

`bee` //Returns the entire instance`

`bee.address`    //Returns the address of the deployed token

`bee.name()`    //Calls the function from the OpenZeppelin detailed contract we inherited from and returns the name we set in the migration script.