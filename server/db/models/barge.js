const db = require('../db')
const Sequelize = require('sequelize')

const Barge = db.define('barge', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
})

module.exports = Barge
