const router = require('express').Router()

// /api
router.use('/users', require('./users'))
router.use('/vessel', require('./vessels'))
router.use('/barge', require('./barges'))
router.use('/claim', require('./claims'))

// router.use('/claim', async (req, res, next) => {
//   res.send('vesesel')
// })
router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router
