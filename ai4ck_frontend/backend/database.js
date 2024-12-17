const { Pool } = require("pg");

const pool = new Pool({
  user: "ai4woman_users",
  host: "192.168.20.8",
  database: "ai4womans_db",
  password: "Ai4womans@123",
  port: 5432,
});

module.exports = pool;