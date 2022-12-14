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
    price: DataTypes.STRING,
    departure: DataTypes.STRING,
    arrival: DataTypes.STRING,
    departureAirport: DataTypes.STRING,
    arrivalAirport: DataTypes.STRING,
    departure2: DataTypes.STRING,
    arrival2: DataTypes.STRING,
    departureAirport2: DataTypes.STRING,
    arrivalAirport2: DataTypes.STRING,
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