const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const AppUsername = sequelize.define(
  "AppUsername",
  {
    username: DataTypes.STRING,
    userid: {
      type: DataTypes.INTEGER,
      primaryKey: true, // 👈 บอกว่าใช้ตัวนี้แทน id
      autoIncrement: true,
    },
    userdesc: DataTypes.STRING,
    hash1: DataTypes.STRING,
    hash2: DataTypes.STRING,
  },
  {
    modelName: "AppUsername",
    tableName: "app_username",
    timestamps: false,
  },
);

module.exports = AppUsername;
