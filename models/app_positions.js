const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const AppPosition = sequelize.define(
  "AppPosition",
  {
    PositionID: {
      allowNull: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Positionname: {
      allowNull: true,
      type: DataTypes.STRING(70),
    },
    PosID: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    PPK: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    Nurse: {
      allowNull: true,
      type: DataTypes.TINYINT,
    },
    Comment: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    Officegroup: {
      allowNull: true,
      type: DataTypes.TINYINT,
    },
    BusinessGroup: {
      allowNull: true,
      type: DataTypes.TINYINT,
    },
    FrameAmount: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    Shortname: {
      allowNull: true,
      type: DataTypes.STRING(100),
    },
    JobDesc: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    Educate: {
      allowNull: true,
      type: DataTypes.STRING(10),
    },
    UserKey: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    KeyDate: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    UptoDate: {
      allowNull: true,
      type: DataTypes.DATE,
    },
  },
  {
    modelName: "AppPosition",
    tableName: "app_positions",
    timestamps: false,
    freezeTableName: true,
  },
);

module.exports = AppPosition;
