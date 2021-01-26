const router = require('express').Router()
const Entry = require('../db/models/entry')

router.get('/', async (req, res, next) => {
  try {
    const entry = await Entry.findAll()

    res.send(entry)
  } catch (error) {
    next(error)
  }
})

module.exports = router
