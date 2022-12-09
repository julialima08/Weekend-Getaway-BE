const { User, Trip } = require('../models')


const GetUserTrips = async (req, res) => {
  try {
    let userId = parseInt(req.params.userId)
    const trips = await User.findByPk(userId, {
      include: { model: Trip, as: 'creator' }
    })
    res.send(trips)
  } catch (error) {
    throw error
  }
}

const UpdateUser = async (req, res) => {
  try {
    const user = await User.update(
      { ...req.body },
      { where: { id: req.params.user_Id }, returning: true }
    )
    res.send(user)
  } catch (error) {
    throw error
  }
}

const DeleteUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_Id)
    await User.destroy({ where: { id: userId } })
    res.send({
      msg: `User ${userId} Deleted`
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUserTrips,
  UpdateUser,
  DeleteUser,
}
