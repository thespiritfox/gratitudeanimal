const Sequelize = require('sequelize')
const db = require('../db')

const Animal = db.define('animal', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  species: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.TEXT,
    validate: {
      isUrl: true,
    },
    allowNull: false,
  },
})

module.exports = Animal
