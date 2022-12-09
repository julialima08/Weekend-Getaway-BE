'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      airline: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      departure: {
        type: Sequelize.DATE
      },
      arrival: {
        type: Sequelize.DATE
      },
      departureCity: {
        type: Sequelize.STRING
      },
      departureAirport: {
        type: Sequelize.STRING
      },
      arrivalCity: {
        type: Sequelize.STRING
      },
      arrivalAirport: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.INTEGER
      },
      stops: {
        type: Sequelize.INTEGER
      },
      tripId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('flights');
  }
};