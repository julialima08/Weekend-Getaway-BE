'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Flight.belongsTo(models.Trip, {
        foreignKey: 'tripId',
        as: 'flights'
      })
    }
  }
  Flight.init({
    airline: DataTypes.STRING,
    price: DataTypes.INTEGER,
    departure: DataTypes.STRING,
    arrival: DataTypes.STRING,
    departureCity: DataTypes.STRING,
    departureAirport: DataTypes.STRING,
    arrivalCity: DataTypes.STRING,
    arrivalAirport: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    stops: DataTypes.STRING,
    tripId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'trip',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Flight',
    tableName: 'flights'
  });
  return Flight;
};