const Router = require('express').Router()
const UserRouter = require('./UserRouter')
// const FlightRouter = require('./FlightRouter')
const AuthRouter = require('./AuthRouter')
// const TripRouter = require('./TripRouter')

Router.use('/user', UserRouter)
// Router.use('/flights', FlightRouter)
Router.use('/auth', AuthRouter)
// Router.use('/trips', TripRouter)

module.exports = Router