const db = require('../db')
const Sequelize = require('sequelize')

const Vessel = db.define('vessel', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
})


module.exports = Vessel
