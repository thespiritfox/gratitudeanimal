const router = require('express').Router()
const Animal = require('../db/models/animal')

// router.get('/', async (req, res, next) => {
//   try {
//     const animal = await Animal.findOne({
//       where: {
//         userId: req.session.passport.user,
//       },
//     })
//     res.json(await animal)
//   } catch (error) {
//     next(error)
//   }
// })

router.get('/', async (req, res, next) => {
  try {
    const animal = await Animal.findAll()

    res.json(animal)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    // const userId = req.session.passport.user

    console.log(req._passport)

    const animal = await Animal.create(req.body)

    res.json(animal)
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
    res.json(animalUpdate)
  } catch (ex) {
    next(ex)
  }
})

module.exports = router
