const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const PatAddress = sequelize.define(
  "PatAddress",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
    },
    hn: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    house: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    moo: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    soy: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    road: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    tambon: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    amphur: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    province: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    country: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    postcode: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING(40),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(40),
      allowNull: true,
    },
    flag_status: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "pat_address",
    modelName: "PatAddress",
    timestamps: false,
  }
);

module.exports = PatAddress;
