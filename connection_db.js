const dontev = require("dotenv");
const mysql = require("mysql");
const env = dontev.config().parsed;

const database = mysql.createConnection({
  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_DATABASENAME,
});

database.connect((err) => {
  if (err) throw err;
  console.log("Database connetnd");
});

module.exports = database;
