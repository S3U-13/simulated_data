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
    await queryInterface.createTable("officegroup", {
      OffID: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      Offname: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },
      FiveYearReport: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      ShortOffname: {
        allowNull: true,
        type: Sequelize.STRING(20),
      },
      PaperText: {
        allowNull: true,
        type: Sequelize.STRING(100),
      },
      Interview: {
        allowNull: true,
        type: Sequelize.STRING(3),
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
    await queryInterface.dropTable("officegroup");
  },
};
