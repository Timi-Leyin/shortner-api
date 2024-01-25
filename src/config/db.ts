import { Sequelize } from "sequelize";

const { env } = process;


const db = new Sequelize(env.DB_URL as string, {
  dialect: "postgres",
  logging:false
});

export default db;
