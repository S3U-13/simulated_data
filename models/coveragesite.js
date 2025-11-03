const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const CoverageSite = sequelize.define(
  "CoverageSite",
  {
    siteid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    sitecode: {
      type: DataTypes.STRING(12),
      allowNull: true,
    },
    sitedesc: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    provcode: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    provdesc: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    officetype: {
      type: DataTypes.STRING(40),
      allowNull: true,
    },
    typecode: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    areacode: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    mastersiteid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    hcode9: {
      type: DataTypes.STRING(12),
      allowNull: true,
    },
  },
  {
    tableName: "coveragesite",
    modelName: "CoverageSite",
    timestamps: false, // ไม่มี createdAt / updatedAt
  }
);

module.exports = CoverageSite;
