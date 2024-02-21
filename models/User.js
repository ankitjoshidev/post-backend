const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const User = sequelize.define('user', {
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  registered:{
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  active: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

module.exports = User;