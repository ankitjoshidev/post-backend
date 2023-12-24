const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const User = sequelize.define('user', {
  user_pass: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  user_nicename: Sequelize.STRING,
  user_email: Sequelize.STRING,
  user_url: Sequelize.STRING,
  user_registered: Sequelize.BOOLEAN,
  user_activation_key: Sequelize.STRING,
  user_status: Sequelize.BOOLEAN,
  display_name: Sequelize.STRING,
});

module.exports = User;