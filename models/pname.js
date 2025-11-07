const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Pname = sequelize.define(
  "pname",
  {
    name: {
      allowNull: true,
      type: DataTypes.STRING(100),
    },
    class: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    provis_code: {
      allowNull: true,
      type: DataTypes.STRING(5),
    },
    hos_guid: {
      allowNull: true,
      type: DataTypes.STRING(38),
    },
    hos_guid_ext: {
      allowNull: true,
      type: DataTypes.STRING(64),
    },
    main_age: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    marrystatus: {
      allowNull: true,
      type: DataTypes.STRING(1),
    },
  },
  {
    tableName: "pname",
    modelName: "Pname",
    timestamps: false, // ไม่มี createdAt / updatedAt
  }
);
module.exports = Pname;
