"use strict";

const { INTEGER } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("lookup", {
      lookuptypeid: {
        allowNull: true,
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      lookupid: {
        allowNull: true,
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      lookupname: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      active: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      extraid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      shortkey: {
        allowNull: true,
        type: Sequelize.STRING(4),
      },
      stdcode: {
        allowNull: true,
        type: Sequelize.STRING(4),
      },
      lookupgroup: {
        allowNull: true,
        type: Sequelize.STRING(2),
      },
    });
    await queryInterface.createTable("addressname", {
      addresscode: {
        allowNull: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      province: {
        allowNull: true,
        type: Sequelize.STRING(2),
      },
      amphur: {
        allowNull: true,
        type: Sequelize.STRING(2),
      },
      tambon: {
        allowNull: true,
        type: Sequelize.STRING(2),
      },
      detailtext: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },
      zipcode: {
        allowNull: true,
        type: Sequelize.STRING(5),
      },
      shortkey: {
        allowNull: true,
        type: Sequelize.STRING(2),
      },
    });

    await queryInterface.createTable("coveragesite", {
      siteid: {
        allowNull: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sitecode: {
        allowNull: true,
        type: Sequelize.STRING(12),
      },
      sitedesc: {
        allowNull: true,
        type: Sequelize.STRING(250),
      },
      provcode: {
        allowNull: true,
        type: Sequelize.STRING(2),
      },
      provdesc: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },
      officetype: {
        allowNull: true,
        type: Sequelize.STRING(40)
      },
      typecode: {
        allowNull: true,
        type: Sequelize.STRING(1)
      },
      areacode: {
        allowNull: true,
        type: Sequelize.STRING(1)
      },
      mastersiteid: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      hcode9: {
        allowNull: true,
        type: Sequelize.STRING(12)
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("lookup");
    await queryInterface.dropTable("addressname");
    await queryInterface.dropTable("coveragesite");
  },
};
