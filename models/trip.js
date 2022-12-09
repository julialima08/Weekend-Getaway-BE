'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Trip.belongsTo(models.User, {
        as: 'trip',
        foreignKey: 'trips'
      })
    }
  }
  Trip.init({
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    title: DataTypes.STRING,
    date: DataTypes.STRING,
    destination: DataTypes.STRING,
    flights: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Trip',
    tableName: 'trips'
  });
  return Trip;
};