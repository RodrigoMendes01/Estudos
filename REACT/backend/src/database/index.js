const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  host: process.env.HOST_DB,
  port: 5432,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.NAME_DB,
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
