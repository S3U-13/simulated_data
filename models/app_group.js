const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const AppGroup = sequelize.define(
  "AppGroup",
  {
    groupname: DataTypes.STRING,
    active: DataTypes.STRING,
    edituserid: DataTypes.INTEGER,
    userlogid: DataTypes.INTEGER,
  },
  {
    modelName: "AppGroup",
    tableName: "app_group",
    timestamps: false,
  },
);

module.exports = AppGroup;
