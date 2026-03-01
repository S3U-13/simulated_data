const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const AppUser = sequelize.define(
  "AppUser",
  {
    userid: {
      type: DataTypes.INTEGER,
      primaryKey: true, // 👈 บอกว่าใช้ตัวนี้แทน id
      autoIncrement: true,
    },
    blobpsw1: DataTypes.BLOB,
    blobpsw2: DataTypes.BLOB,
    rightlevel: DataTypes.INTEGER,
    careuserid: DataTypes.INTEGER,
    personid: DataTypes.INTEGER,
    startdatetime: DataTypes.DATE,
    enddatetime: DataTypes.DATE,
    createdatetime: DataTypes.DATE,
    createuserid: DataTypes.INTEGER,
    editdatetime: DataTypes.DATE,
    edituserid: DataTypes.INTEGER,
    editlogid: DataTypes.INTEGER,
    active: DataTypes.STRING,
    logext: DataTypes.STRING,
  },
  { modelName: "AppUser", tableName: "app_user", timestamps: false },
);

module.exports = AppUser;
