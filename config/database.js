const Sequelize = require('sequelize');

// Postgres database config
// const sequelize = new Sequelize(
//   'post', // Replace with your database name
//   'postgres', // Replace with your database username
//   '1234', // Replace with your database password
//   {
//     host: 'localhost',
//     dialect: 'postgres',
//     port: 5432, // Default PostgreSQL port
//   }
// );


// Sqlite database configs
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
});

module.exports = sequelize;