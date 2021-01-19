import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_IP}:5432/want3d`
);

export default sequelize;
