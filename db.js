const { Client } = require("pg");

const client = new Client({
  connectionString: "postgresql:///spamdb"
});

client.connect();

module.exports = client;