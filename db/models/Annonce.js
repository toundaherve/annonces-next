import { DataTypes, Model } from "sequelize";
import sequelize from "../../db";

class Annonce extends Model {}

export default Annonce.init(
  {
    // Model attributes are defined here
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    contact: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Annonce", // We need to choose the model name
  }
);
