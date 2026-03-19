"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("app_positions", {
      PositionID: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      Positionname: {
        allowNull: true,
        type: Sequelize.STRING(70),
      },
      PosID: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      PPK: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      Nurse: {
        allowNull: true,
        type: Sequelize.TINYINT,
      },
      Comment: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      Officegroup: {
        allowNull: true,
        type: Sequelize.TINYINT,
      },
      BusinessGroup: {
        allowNull: true,
        type: Sequelize.TINYINT,
      },
      FrameAmount: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      Shortname: {
        allowNull: true,
        type: Sequelize.STRING(100),
      },
      JobDesc: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      Educate: {
        allowNull: true,
        type: Sequelize.STRING(10),
      },
      UserKey: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      KeyDate: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      UptoDate: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("app_positions");
  },
};
