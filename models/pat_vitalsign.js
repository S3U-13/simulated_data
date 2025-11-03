const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const PatVitalSign = sequelize.define(
  "PatVitalSign",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    patregid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    patvisitid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    hn: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dodate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    dotime: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    waist: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
    },
    height: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
    },
    weight: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
    },
    bp_systolic: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    bp_diastolic: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    temperature: {
      type: DataTypes.DECIMAL(4, 1),
      allowNull: true,
    },
    pulse: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    respiration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    coma_e: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    coma_v: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    coma_m: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    locationid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    smoking: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    alcohol: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    o2sat: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    sos: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    plain: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    lmpdate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "pat_vitalsign",
      modelName: "PatVitalSign",
    timestamps: false, // ถ้า table ไม่มี createdAt/updatedAt ให้เปลี่ยนเป็น false
  }
);
module.exports = PatVitalSign;
