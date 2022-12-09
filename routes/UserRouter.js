const Router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

Router.get('/:userId', controller.GetUserTrips)
Router.put(
  '/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateUser
)
Router.delete(
  '/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteUser
)


module.exports = Router
