const router = require('express').Router()

const Vessel = require('../db/models/vessel')
const Claim = require('../db/models/claim')
//api/vessel/
router.get('/', async (req, res, next) => {
  try {
    const vessel = await Vessel.findAll()
    res.send(vessel)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const vessel = await Vessel.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'name']
    })
    res.json(vessel)
  } catch (err) {
    next(err)
  }
})

// update vessel
router.post('/', async (req, res, next) => {
  const name = req.body.name
  try {
    const newVessel = await Vessel.create(name)
    res.status(200).send(newVessel)
  } catch (error) {
    next(error)
  }
})

module.exports = router
