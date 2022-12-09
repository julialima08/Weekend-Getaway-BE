const { Flight } = require('../models')

const GetFlights = async (req, res) => {
  try {
    const flights = await Flight.findAll()
    res.send(flights)
  } catch (error) {
    throw error
  }
}

const CreateFlight = async (req, res) => {
  try {
    const flights = await Flight.create({ ...req.body })
    res.send(flights)
  } catch (error) {
    throw error
  }
}

module.exports= {
  GetFlights,
  CreateFlight
}