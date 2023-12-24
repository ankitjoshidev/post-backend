const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const Post = sequelize.define('posts', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // Essential fields:
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      editor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // Additional fields:
      tag: {
        type: Sequelize.STRING, // Adjust type if needed for multiple tags
      },
      feature_img: {
        type: Sequelize.STRING,
      },
      visibility: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      // Foreign key referencing the user table:
      author: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT', // Adjust foreign key actions as needed
      }
});

module.exports = Post;