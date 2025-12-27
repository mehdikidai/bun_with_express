import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: Bun.env.DB_HOST || "localhost",
  user: Bun.env.DB_USERNAME || "root",
  password: Bun.env.DB_PASSWORD || "",
  database: Bun.env.DB_DATABASE || "depot_pro",
  waitForConnections: true,
  connectionLimit: 10,
});

export default pool;
