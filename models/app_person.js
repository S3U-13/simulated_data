const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const AppPerson = sequelize.define(
  "app_person",
  {
    id: {
      allowNull: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    PSCodeID: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    pscode: {
      allowNull: true,
      type: DataTypes.STRING(10),
    },
    salutation: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    firstname: {
      allowNull: true,
      type: DataTypes.STRING(100),
    },
    lastname: {
      allowNull: true,
      type: DataTypes.STRING(100),
    },
    GroID: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    OffID: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    PosID: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    NursePosID: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    Poslevel: {
      allowNull: true,
      type: DataTypes.STRING(70),
    },
    Sex: {
      allowNull: true,
      type: DataTypes.STRING(70),
    },
    DivID: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    DepartID: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    SsjID: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    WorkPoint: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Specialty: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    Gradlevel: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    Graduate: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    Educate: {
      allowNull: true,
      type: DataTypes.STRING(150),
    },
    Birthday: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    StartJobdate: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    ExpertID: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    EndJobdate: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    AcademicGroup: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    Remark: {
      allowNull: true,
      type: DataTypes.STRING(250),
    },
    Active: {
      allowNull: true,
      type: DataTypes.STRING(9),
    },
    FuncUnitID: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    StatusID: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    Up_date: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    TypeMID: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    TypePayMid: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    TypeDC: {
      allowNull: true,
      type: DataTypes.STRING(100),
    },
    Inscl: {
      allowNull: true,
      type: DataTypes.STRING(4),
    },
    CITIZEN: {
      allowNull: true,
      type: DataTypes.STRING(13),
    },
    NOBANK: {
      allowNull: true,
      type: DataTypes.STRING(10),
    },
    TAXID: {
      allowNull: true,
      type: DataTypes.STRING(10),
    },
    salary: {
      allowNull: true,
      type: DataTypes.DECIMAL,
    },
    EndUser: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    KeyDate: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    Unions: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    StatusMember: {
      allowNull: true,
      type: DataTypes.SMALLINT,
    },
    picperson: {
      allowNull: true,
      type: DataTypes.STRING(200),
    },
    NurseCrNo: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    Engprename: {
      allowNull: true,
      type: DataTypes.STRING(10),
    },
    Engname: {
      allowNull: true,
      type: DataTypes.STRING(200),
    },
    Engsurname: {
      allowNull: true,
      type: DataTypes.STRING(200),
    },
    Email: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Fiveyear: {
      allowNull: true,
      type: DataTypes.STRING(10),
    },
    Username: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Password: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    UserKey: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    CodeCSMBS: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    FiveyearNurse: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    NolicensedClinic: {
      allowNull: true,
      type: DataTypes.STRING(50),
    },
    HN: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    Director: {
      allowNull: true,
      type: DataTypes.STRING(1),
    },
    PosLevelOLD: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    BloodGroup: {
      allowNull: true,
      type: DataTypes.STRING(5),
    },
    SendDev: {
      allowNull: true,
      type: DataTypes.STRING(1),
    },
    HomePhone: {
      allowNull: true,
      type: DataTypes.STRING(20),
    },
    MobilePhone: {
      allowNull: true,
      type: DataTypes.STRING(20),
    },
    JobEducate: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    IP: {
      allowNull: true,
      type: DataTypes.STRING(15),
    },
  },
  {
    tableName: "app_person",
    modelName: "AppPerson",
    timestamps: false, // ไม่มี createdAt / updatedAt
  }
);
module.exports = AppPerson;
