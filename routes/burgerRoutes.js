const router = require('express').Router()
const {getBurgers, getEatenBurgers, getUneatenBurgers, createBurger, updateBurger, deleteBurger} = require('../controllers/burgerController.js')

//get all burgers
router.get('/burgers', (request, response) => {
  getBurgers( burgers => {
    response.json(burgers)
  })
})

//get all undevoured burgers
router.get('/burgers/undevoured', (request, response) => {
  getUneatenBurgers(burgers => {
    response.json(burgers)
  })
})

//get all devoured burgers
router.get('/burgers/devoured', (request, response) => {
  getEatenBurgers(burgers => {
    response.json(burgers)
  })
})

//create a burger
router.put('/burgers', (request, response) => {
  createBurger(request.body, () =>{
    response.sendStatus(200)
  })
})

//update a burger
router.put('/burgers/:id', (request, response) => {
  updateBurger(request.params.id, request.body, () => {
    response.sendStatus(200)
  })
})

//delete a burger
router.delete('/burgers/:id', (request, response) => {
  deleteBurger(request.params.id, () => {
    response.sendStatus(200)
  })
})

module.exports = router