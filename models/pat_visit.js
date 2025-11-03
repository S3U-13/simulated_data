const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const PatVisit = sequelize.define(
  "PatVisit",
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
    an: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    prename: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    firstname: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    lastname: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    visitdatetime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    dischodatetime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    lastregtypeid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    patcoverageid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    coveragecode: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    coveragemasterid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    regstatusid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    lastlocationid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dischargettypeid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sex: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ageday: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING(120),
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
    zipcode: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    citizencardno: {
      type: DataTypes.STRING(13),
      allowNull: true,
    },
    flag_status: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    admitlocationid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    admindatetime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    dischlocationid: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    visitdate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "pat_visit",
    modelName: "PatVisit",
    timestamps: false,
  }
);

module.exports = PatVisit;
