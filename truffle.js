module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: "8545",
      network_id: "*" //Match any network ID.
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};