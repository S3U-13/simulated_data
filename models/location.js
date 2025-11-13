const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Location = sequelize.define(
  "Location",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    detailtext: {
      allowNull: true,
      type: DataTypes.STRING(150),
    },
    locationtypeid: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    departmentid: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    departmentid: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    buildingid: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    floor: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    active: {
      allowNull: true,
      type: DataTypes.STRING(1),
    },
    progno: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    shortkey: {
      allowNull: true,
      type: DataTypes.STRING(4),
    },
    locationconsultid: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    shortname: {
      allowNull: true,
      type: DataTypes.STRING(50),
    },
    telephone: {
      allowNull: true,
      type: DataTypes.STRING(50),
    },
    flag_1: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "location",
    modelName: "Location",
    timestamps: false, // ไม่มี createdAt / updatedAt
  }
);

module.exports = Location;
