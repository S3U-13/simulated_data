const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const AddressName = sequelize.define(
  "AddressName",
  {
    addresscode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    province: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    amphur: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    tambon: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    detailtext: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    zipcode: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    shortkey: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
  },
  {
    tableName: "addressname",
    modelName: "AddressName",
    timestamps: false, // ไม่มี createdAt / updatedAt
  }
);
module.exports = AddressName;
