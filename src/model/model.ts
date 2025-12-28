import type { RowDataPacket, ResultSetHeader } from "mysql2";
import db from "../database/db";

abstract class Model {

  /*
  === table name ===
  */

  protected static table: string;

  /*
  === all ===
  */

  static async all<T extends RowDataPacket>(): Promise<T[]> {
    const [rows] = await db.execute<T[]>(`SELECT * FROM \`${this.table}\``);
    return rows;
  }

  /*
  === find ===
  */

  static async find<T extends RowDataPacket>(id: number): Promise<T | null> {
    const [rows] = await db.execute<T[]>(
      `SELECT * FROM \`${this.table}\` WHERE id = ?`,
      [id]
    );
    return rows[0] ?? null;
  }

  /*
  === create ===
  */

  static async create(data: Record<string, any>): Promise<number> {
    const table = (this as typeof Model).table;
    const keys = Object.keys(data);
    const values = Object.values(data);
    const placeholders = keys.map(() => "?").join(", ");

    const sql = `INSERT INTO \`${table}\` (${keys
      .map((k) => `\`${k}\``)
      .join(", ")}) VALUES (${placeholders})`;

    const [result] = await db.execute<ResultSetHeader>(sql, values);

    return result.insertId;
  }
}

export default Model;
