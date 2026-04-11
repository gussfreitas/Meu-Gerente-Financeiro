import { Sequelize } from "sequelize";

const databaseUrl = process.env.DATABASE_URL;

let sequelize;

if (databaseUrl) {
  sequelize = new Sequelize(databaseUrl, {
    dialect: "postgres",
    logging: false,
  });
} else {
  const db = process.env.POSTGRES_DB || "financeiro_db";
  const user = process.env.POSTGRES_USER || "postgres";
  const password = process.env.POSTGRES_PASSWORD || "postgres";
  const host = process.env.POSTGRES_HOST || "localhost";
  const port = Number(process.env.POSTGRES_PORT || 5432);

  sequelize = new Sequelize(db, user, password, {
    host,
    port,
    dialect: "postgres",
    logging: false,
  });
}

export default sequelize;
