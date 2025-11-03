const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const PatReg = sequelize.define(
  "PatReg",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    patvisitid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    regtypeid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    regstatusid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    departcode: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    locationid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    roomno: {
      type: DataTypes.STRING(4),
      allowNull: true,
    },
    los: {
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
    queueno: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    locationqueueno: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    startdatetime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    enddatetime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    dischargettypeid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    flag_status: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    flag_reg: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    flag_service: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    flag_appoint: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    appointid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    nextappointid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    flag_refer: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    referid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    referinid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    referoutid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    maindoctorid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    editdatetime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    projectid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    flag_app: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    fromlocationid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    visitdate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    frompatregid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    druglocationid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    lablocationid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    xraylocationid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    cashierlocationid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    flag_end: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    flag_opdcard: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    flag_oneself: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    nurseuserid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    drugcheckuserid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    regdatetime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    drugdatetime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    cashdatetime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    docdatetime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    flag_new: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    flag_a: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    flag_b: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    flag_c: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
  },
  {
    tableName: "pat_reg",
    modelName: "PatReg",
    timestamps: false,
  }
);

module.exports = PatReg;
