const Router = require('express').Router()
const controller = require('../controllers/TripController')
const middleware = require('../middleware')

Router.get('/', controller.GetTrips)
Router.get('/:tripId', controller.GetTripById)
Router.post('/create', controller.CreateTrip)
Router.put(
  '/:tripId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateTrip
)
Router.delete(
  '/:tripId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteTrip
)


module.exports = Router