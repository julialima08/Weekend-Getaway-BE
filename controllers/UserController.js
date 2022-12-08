const { User } = require('../models')


const GetUserTrips = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.user_Id)
    res.send(user)
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
