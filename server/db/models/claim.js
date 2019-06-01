const db = require('../db')
const Sequelize = require('sequelize')

const Claim = db.define('claim', {
  file: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false
  },
  trade: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false
  },
  allocation: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  restriction: {
    type: Sequelize.INTEGER,
    default: [28]
  },
  reminder: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    default: [7, 14, 30]
  },
  start: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  end: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  // 0 for payable, 1 for receivable
  kind: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  // 0 for No risk, 1 for mid risk, 2 for high risk
  risk: {
    type: Sequelize.INTEGER,
    deafult: 0,
    allowNull: false
  },
  notes: {
    type: Sequelize.TEXT
  },
  barges: {
    type: Sequelize.ARRAY(Sequelize.INTEGER)
  }
})

module.exports = Claim
