const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Pat = sequelize.define(
  "Pat",
  {
    hn: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    soundex: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    salutation: {
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
    prename_en: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    firstname_en: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    lastname_en: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    birthflag: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    sex: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    marriage: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    religious: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    race: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    citizenship: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    occupation: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    abogroup: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    hnofmother: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    firstnameofmother: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    lastnameofmother: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    firstnameoffather: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    lastnameoffather: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    firstnameofcouple: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    lastnameofcouple: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    citizencardno: {
      type: DataTypes.STRING(13),
      allowNull: true,
    },
    othercardtype: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    othercardno: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    flag_status: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    adduserid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    adddatetime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    edituserid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    editdatetime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    timestart: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    timefinish: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    birhtdatetime: {
      // พิมพ์ตาม migration เดิม
      type: DataTypes.DATE,
      allowNull: true,
    },
    onhand: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    lastlocationid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    bloodgroup: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
  },
  {
    tableName: "pat",
    modelName: "Pat",
    timestamps: false,
  }
);

module.exports = Pat;
