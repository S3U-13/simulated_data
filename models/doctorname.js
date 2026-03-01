const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const DoctorName = sequelize.define(
  "DoctorName",
  {
    doctorid: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    doctorname: DataTypes.STRING,
    doctorlastname: DataTypes.STRING,
    sex: DataTypes.STRING,
    doctorsalutation: DataTypes.STRING,
    doctorlicenseid: DataTypes.STRING,
    doctorspecialist: DataTypes.STRING,
    doctorlevel: DataTypes.STRING,
    doctordepart: DataTypes.STRING,
    doctorlimit: DataTypes.STRING,
    flag_active: DataTypes.STRING,
    activestart: DataTypes.DATE,
    activeend: DataTypes.DATE,
    personid: DataTypes.INTEGER,
    doctornameeng: DataTypes.STRING,
    doctorlastnameeng: DataTypes.STRING,
  },
  { modelName: "DoctorName", tableName: "doctor_name", timestamps: false },
);

module.exports = DoctorName;
