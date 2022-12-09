const router = require('express').Router()
const controller = require('../controllers/FlightController')
const middleware = require('../middleware')

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetFlights
)
router.post('/create', controller.CreateFlight)


module.exports = router
