'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      User.hasMany(models.Trip, {
        foreignKey: 'userId'
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordDigest: DataTypes.STRING,
    trips: {
      type: DataTypes.STRING,
      onDelete: 'CASCADE',
      references: {
        model: 'trips',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: "users"
  });
  return User;
};