const router = require('express').Router()

const Barge = require('../db/models/barge')
const Vessel = require('../db/models/vessel')
const Claim = require('../db/models/claim')

//api/claim/

router.get('/:id', async (req, res, next) => {
  try {
    const claim = await Claim.findOne({
      where: {
        id: req.params.id
      }
    })
    res.json(claim)
  } catch (err) {
    next(err)
  }
})
router.get('/:id/test', async (req, res, next) => {
  try {
    const claim = await Claim.findAll({
      include: [
        {
          model: Vessel
        }
      ]
    })
    res.json(claim)
    // res.send('test success')
  } catch (err) {
    next(err)
  }
})

// update claim
router.post('/', async (req, res, next) => {
  const name = req.body.name
  try {
    const newClaim = await Claim.create(name)
    res.status(200).send(newClaim)
  } catch (error) {
    next(error)
  }
})

module.exports = router
