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


module.exports = {
  GetTrips,
  GetTripById,
  CreateTrip,
  UpdateTrip,
  DeleteTrip,
}
