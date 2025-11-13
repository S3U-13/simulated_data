"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("location", {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      detailtext: {
        allowNull: true,
        type: Sequelize.STRING(150),
      },
      locationtypeid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      departmentid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      departmentid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      buildingid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      floor: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      active: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      progno: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      shortkey: {
        allowNull: true,
        type: Sequelize.STRING(4),
      },
      locationconsultid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      shortname: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },
      telephone: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },
      flag_1: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("location");
  },
};
