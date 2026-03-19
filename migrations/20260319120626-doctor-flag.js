"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("doctor_flag", {
      tablename: {
        primaryKey: true,
        allowNull: true,
        type: Sequelize.STRING(50),
      },
      columnname: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },
      columnvalue: {
        primaryKey: true,
        allowNull: true,
        type: Sequelize.STRING(3),
      },
      descvalue: {
        allowNull: true,
        type: Sequelize.STRING(100),
      },
      note: {
        allowNull: true,
        type: Sequelize.STRING(100),
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
    await queryInterface.dropTable("doctor_flag");
  },
};
