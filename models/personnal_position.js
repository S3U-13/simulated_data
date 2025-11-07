const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const PersonnalPositions = sequelize.define(
  "personnal_positions",
  {
    positionid: {
      allowNull: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    positionname: {
      allowNull: true,
      type: DataTypes.STRING(70),
    },
    posid: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    ppk: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    nurse: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    commenttext: {
      allowNull: true,
      type: DataTypes.STRING(200),
    },
    officegroup: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    businessgroup: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    frameamount: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    shortname: {
      allowNull: true,
      type: DataTypes.STRING(100),
    },
  },
  {
    tableName: "personnal_positions",
    modelName: "PersonnalPositions",
    timestamps: false, // ไม่มี createdAt / updatedAt
  }
);
module.exports = PersonnalPositions;
