const router = require('express').Router()
const Entry = require('../db/models/entry')
const Animal = require('../db/models/animal')

router.get('/', async (req, res, next) => {
  try {
    res.send(await animal)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const userId = req.session.passport.user

    const [animal, wasCreated] = await Animal.create(
      req.body
      //     {
      //   defaults: {
      //     userId,
      //   },
      // }
    )

    res.send(animal)
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const animal = await Animal.findOne({
      where: {
        userId: req.session.passport.user,
      },
    })
    const animalUpdate = await animal.update(req.body, {returning: true})
    res.send(animalUpdate)
  } catch (ex) {
    next(ex)
  }
})

module.exports = router
