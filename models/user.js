'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    trips: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: "users"
  });
  return User;
};