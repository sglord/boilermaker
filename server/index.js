const path = require('path')
const express = require('express')
const db = require('./db')
const PORT = process.env.PORT || 8080
const app = express()

app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/api', require('./api')) //routes

app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

db.sync({force: false}).then(() => {
  app.listen(8080, function() {
    console.log(`Server is on port 8080`)
  })
})
module.exports = app
