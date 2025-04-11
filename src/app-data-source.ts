import { join } from "path";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { connect } from "http2";

dotenv.config();

export const myDataSource: DataSource = new DataSource({
  type: "mariadb",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "nodejs2025",
  synchronize: false,
  logging: false,
  entities: [join(__dirname, "entity", "**/*.{ts,js}")],
  migrations: [join(__dirname, "migration", "**/*.{ts,js}")],
  subscribers: [join(__dirname, "subscriber", "**/*.{ts,js}")],
  extra: {
    connectionLimit: 10, // Numero maximo de conexiones en el pool.
    connectionTimeoutMillis: 5000, // Tiempo de espera (en milisegundos) para obtener una conexion del pool antes de
    acquireTimeout: 10000, // Tiempo de espera de hasta 10s antes de que se cierre la conexion.
    idleTimeout: 30000, // Tiempo de espera de 30s antes de que se cierre la conexion.
    charset: "utf8_general_ci" // Codificacion de caracteres.
  }
});
