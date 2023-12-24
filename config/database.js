const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'post', // Replace with your database name
  'postgres', // Replace with your database username
  '1234', // Replace with your database password
  {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432, // Default PostgreSQL port
  }
);

module.exports = sequelize;