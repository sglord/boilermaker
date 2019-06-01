const User = require('./user')
const Barge = require('./Barge')
const Vessel = require('./Vessel')
const Claim = require('./Claim')

// has one inserts association key in target ***
// belongs to inserts assocition key in source
// Source.hasOne(Target)
// Source.belongsTo(Target) ***

Vessel.hasOne(Claim)
Claim.belongsTo(Vessel)

module.exports = {
  User,
  Vessel,
  Barge,
  Claim
}
