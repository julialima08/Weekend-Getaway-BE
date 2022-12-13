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

const DeleteFlight = async (req, res) => {
  try {
    let FlightId = parseInt(req.params.flightId)
    await Flight.destroy({ where: { id: FlightId } })
    res.send({
      msg: `Flight ${FlightId} Deleted`
    })
  } catch (error) {
    throw error
  }
}

module.exports= {
  GetFlights,
  CreateFlight,
  DeleteFlight
}