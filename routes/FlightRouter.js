const router = require('express').Router()
const controller = require('../controllers/FlightController')
const middleware = require('../middleware')

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetFlights
)


module.exports = router
