"use strict";

const { SELECT } = require("sequelize/lib/query-types");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("app_personfunctionalunit", {
      FuncunitID: {
        primaryKey: true,
        allowNull: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      FuncunitName: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      TyCode: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      DepartID: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      SublocID: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      Desce: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      HeadID: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      HearNurse: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      ExtraNurse: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      FunctCode: {
        allowNull: true,
        type: Sequelize.TINYINT,
      },
      Active: {
        allowNull: true,
        type: Sequelize.STRING(100),
      },
      Newsletter: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      Newsgroup: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      Ogz: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      NewsListID: {
        allowNull: true,
        type: Sequelize.TINYINT,
      },
      FuncFiveID: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      ShortName: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      roomdeluxe: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      PaperLessDepartID: {
        allowNull: true,
        type: Sequelize.TINYINT,
      },
      CompetencyGroupID: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      ServiceGroup: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      UserKey: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      UnitCostID: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      NurseGroup: {
        allowNull: true,
        type: Sequelize.TINYINT,
      },
      Vacation: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      UpToDate: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      unittype: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      MinorCode: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      FuncunitNamenurse: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      Servicename: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      Serviceflag: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      Archives: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      funcunitName_en: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      ShortName_en: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      Buildername: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      Floor: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      BuilderID: {
        allowNull: true,
        type: Sequelize.INTEGER,
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

    await queryInterface.dropTable("app_personfunctionalunit");
  },
};
