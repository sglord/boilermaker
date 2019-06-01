'use strict'

const db = require('../server/db')
const {User, Barge, Vessel, Claim} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({username: 'stephen', password: 'timebar'}),
    User.create({username: 'jessica', password: 'knitting'})
  ])

  const vessels = await Promise.all([
    Vessel.create({name: 'vessel 1'}),
    Vessel.create({name: 'vessel 2'})
  ])

  const barges = await Promise.all([
    Barge.create({name: 'barge 1'}),
    Barge.create({name: 'barge 2'}),
    Barge.create({name: 'barge 3'}),
    Barge.create({name: 'barge 4'}),
    Barge.create({name: 'barge 5'})
  ])

  const claims = await Promise.all([
    Claim.create({
      file: 123,
      trade: 123,
      allocation: 123,
      restriction: 28,
      reminder: [7, 14],
      start: '2019-01-01',
      end: '2019-06-01',
      kind: 0,
      risk: 0,
      notes: 'no notes here',
      barges: [1, 2, 3]
    }),
    Claim.create({
      file: 234,
      trade: 234,
      allocation: 123,
      restriction: 28,
      reminder: [7, 14],
      start: '2019-01-01',
      end: '2019-06-01',
      kind: 0,
      risk: 0,
      notes: 'no notes here',
      barges: [1, 2, 4]
    }),
    Claim.create({
      file: 345,
      trade: 345,
      allocation: 123,
      restriction: 28,
      reminder: [7, 14],
      start: '2019-01-01',
      end: '2019-06-01',
      kind: 0,
      risk: 0,
      notes: 'no notes here',
      barges: [1, 2]
    }),
    Claim.create({
      file: 456,
      trade: 456,
      allocation: 123,
      restriction: 28,
      reminder: [7, 14],
      start: '2019-01-01',
      end: '2019-06-01',
      kind: 0,
      risk: 0,
      notes: 'no notes here',
      barges: [2, 3]
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${vessels.length} vessels`)
  console.log(`seeded ${barges.length} barges`)
  console.log(`seeded ${claims.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
