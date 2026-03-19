const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const OfficeGroup = sequelize.define(
  "OfficeGroup",
  {
    OffID: { primaryKey: true, allowNull: true, type: DataTypes.INTEGER },
    Offname: DataTypes.STRING,
    FiveYearReport: DataTypes.STRING,
    ShortOffname: DataTypes.STRING,
    PaperText: DataTypes.STRING,
    Interview: DataTypes.STRING,
  },
  {
    modelName: "OfficeGroup",
    tableName: "officegroup",
    timestamps: false,
  },
);

module.exports = OfficeGroup;
