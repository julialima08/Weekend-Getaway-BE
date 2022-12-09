const { Flight } = require('./models')

const GetFlights = async (req, res) => {
  try {
    const flights = await Flight.findAll()
    res.send(flights)
  } catch (error) {
    throw error
  }
}

module.exports= {
  GetFlights,
}