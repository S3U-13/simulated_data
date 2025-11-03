const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Lookup = sequelize.define(
  "Lookup",
  {
    lookuptypeid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    lookupid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    lookupname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    active: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    extraid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    shortkey: {
      type: DataTypes.STRING(4),
      allowNull: true,
    },
    stdcode: {
      type: DataTypes.STRING(4),
      allowNull: true,
    },
    lookupgroup: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
  },
  {
    tableName: "lookup",
    modelName: "Lookup",
    timestamps: false, // ไม่มี createdAt / updatedAt
  }
);

module.exports = Lookup;
