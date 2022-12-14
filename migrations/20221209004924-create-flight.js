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
        type: Sequelize.STRING
      },
      departure: {
        type: Sequelize.STRING
      },
      arrival: {
        type: Sequelize.STRING
      },
      departureAirport: {
        type: Sequelize.STRING
      },
      arrivalAirport: {
        type: Sequelize.STRING
      },
      departure2: {
        type: Sequelize.STRING
      },
      arrival2: {
        type: Sequelize.STRING
      },
      departureAirport2: {
        type: Sequelize.STRING
      },
      arrivalAirport2: {
        type: Sequelize.STRING
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