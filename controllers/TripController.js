const { Trip } = require('../models')

const GetTrips = async (req, res) => {
  try {
    const trips = await Trip.findAll()
    res.send(trips)
  } catch (error) {
    throw error
  }
}

const GetTripById = async (req, res) => {
  try {
    const trips = await Trip.findByPk(req.params.Trip_Id)
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
    const trips = await Trip.update(
      { ...req.body },
      { where: { id: req.params.Trip_Id }, returning: true }
    )
    res.send(trips)
  } catch (error) {
    throw error
  }
}

const DeleteTrip = async (req, res) => {
  try {
    let TripId = parseInt(req.params.Trip_Id)
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
  DeleteTrip
}
