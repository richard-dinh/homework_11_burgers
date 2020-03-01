const router = require('express').Router()

//route for home view
router.get('/', (request, response) => {
  response.render('index')
})

router.use('/api', require('./burgerRoutes.js'))

module.exports = router