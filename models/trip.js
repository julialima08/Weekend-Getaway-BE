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
        foreignKey: 'userId'
      })
      Trip.hasMany(models.Flight, {
        foreignKey: 'tripId',
        as: 'flights'
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
    date: DataTypes.DATE,
    destination: DataTypes.STRING,
    // flights: {
    //   type: DataTypes.STRING,
    //   onDelete: 'CASCADE',
    //   references: {
    //     model: 'flight',
    //     key: 'id'
    //   }
    // }
  }, {
    sequelize,
    modelName: 'Trip',
    tableName: 'trips'
  });
  return Trip;
};