const Sequelize = require('sequelize')
const db = require('../db')

const Entry = db.define('entry', {
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATEONLY,
    defaultValue: Sequelize.fn('now'),
  },
})

module.exports = Entry
