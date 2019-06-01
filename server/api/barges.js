const router = require('express').Router()

const Barge = require('../db/models/barge')
const Vessel = require('../db/models/vessel')
const Claim = require('../db/models/claim')

//api/barge/
router.get('/', async (req, res, next) => {
  try {
    const barges = await Barge.findAll()
    res.send(barges)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    if (req.user.id === Number(req.params.id)) {
      const barge = await Barge.findOne({
        where: {
          id: req.params.id
        },
        attributes: ['id', 'name']
      })
      res.json(barge)
    } else {
      res.sendStatus(403)
    }
  } catch (err) {
    next(err)
  }
})

// update barge
router.post('/', async (req, res, next) => {
  const name = req.body.name
  try {
    const newBarge = await Barge.create(name)
    res.status(200).send(newBarge)
  } catch (error) {
    next(error)
  }
})

module.exports = router
