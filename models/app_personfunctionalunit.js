const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const AppPersonFunctionalUnit = sequelize.define(
  "AppPersonFunctionalUnit",
  {
    FuncunitID: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    FuncunitName: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    TyCode: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    DepartID: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    SublocID: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    Desce: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    HeadID: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    HearNurse: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    ExtraNurse: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    FunctCode: {
      allowNull: true,
      type: DataTypes.TINYINT,
    },
    Active: {
      allowNull: true,
      type: DataTypes.STRING(100),
    },
    Newsletter: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Newsgroup: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    Ogz: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    NewsListID: {
      allowNull: true,
      type: DataTypes.TINYINT,
    },
    FuncFiveID: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    ShortName: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    roomdeluxe: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    PaperLessDepartID: {
      allowNull: true,
      type: DataTypes.TINYINT,
    },
    CompetencyGroupID: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    ServiceGroup: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    UserKey: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    UnitCostID: {
      allowNull: true,
      type: DataTypes.STRING(1),
    },
    NurseGroup: {
      allowNull: true,
      type: DataTypes.TINYINT,
    },
    Vacation: {
      allowNull: true,
      type: DataTypes.STRING(1),
    },
    UpToDate: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    unittype: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    MinorCode: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    FuncunitNamenurse: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Servicename: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Serviceflag: {
      allowNull: true,
      type: DataTypes.STRING(1),
    },
    Archives: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    funcunitName_en: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    ShortName_en: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Buildername: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Floor: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    BuilderID: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
  },
  {
    modelName: "AppPersonFunctionalUnit",
    tableName: "app_personfunctionalunit",
    timestamps: false,
  },
);

module.exports = AppPersonFunctionalUnit;
