const { Trip, Flight } = require('../models')

const GetTrips = async (req, res) => {
  try {
    const trips = await Trip.findAll({ include: { model: Flight, as: 'flights' }})
    res.send(trips)
  } catch (error) {
    throw error
  }
}

const GetTripById = async (req, res) => {
  try {
    const trips = await Trip.findByPk(req.params.tripId, { include: { model: Flight, as: 'flights' }})
    res.send(trips)
  } catch (error) {
    throw error
  }
}

const CreateTrip = async (req, res) => {
  try {
    const trips = await Trip.create({ ...req.body })
    res.send(trips)
  } catch (error) {
    throw error
  }
}

const UpdateTrip = async (req, res) => {
  try {
    let TripId = parseInt(req.params.tripId)
    const trips = await Trip.update(
      { ...req.body },
      { where: { id: TripId }, returning: true }
    )
    res.send(trips)
  } catch (error) {
    throw error
  }
}

const DeleteTrip = async (req, res) => {
  try {
    let TripId = parseInt(req.params.tripId)
    await Trip.destroy({ where: { id: TripId } })
    res.send({
      msg: `Trip ${TripId} Deleted`
    })
  } catch (error) {
    throw error
  }
}


const removeFlightFromTrip = async (req, res) => {
  try {

  //   const tripId  = parseInt(req.params.tripId)
  //   const trip = await Trip.findByPk(tripId, { include: { model: Flight, as: 'flights' }})
  //   if (trip) {
      
  //     // const flight = trip.Flights.splice(index, 1)
  //     // console.log(flight)
  //     await trip.flights.splice(req.body.index, 1)
  //  console.log(trip)
  //     let updated = await Trip.update(trip, {
  //       where: { id: tripId }, 
  //       returning: true
  //       })
  // console.log(updated)
    
  //     // console.log(flight)
  //     return res.status(200).send(updated)
  //   }
  //   throw new Error('trip not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}


module.exports = {
  GetTrips,
  GetTripById,
  CreateTrip,
  UpdateTrip,
  DeleteTrip,
  removeFlightFromTrip,
}
