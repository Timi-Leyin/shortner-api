import { DataTypes } from "sequelize";
import sequelize from "../config/db";
import { nanoid } from "nanoid";

const Link = sequelize.define("links", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  uuid: {
    type: DataTypes.STRING,
    unique: true,
    defaultValue: nanoid(7),
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expireAt: {
    type: DataTypes.DATE,
  },
});

export default Link;
