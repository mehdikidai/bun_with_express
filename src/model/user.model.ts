import db from "../database/db";
import type { ResultSetHeader, RowDataPacket } from "mysql2";

type UserData = {
  name: string;
  email: string;
  password: string;
};

type UserRow = RowDataPacket & {
  id: number;
  name: string;
  email: string;
};

class User {

  // create a new user

  static async create(data: UserData): Promise<number> {
    
    const { name, email, password } = data;

    const [result] = await db.execute<ResultSetHeader>(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, password]
    );

    return result.insertId;

  }

  // get all users

  static async findAll() {
    const [rows] = await db.execute("SELECT id, name, email FROM users");
    return rows;
  }

  // get user by id

  static async findById(id:number) {
    const [rows] = await db.execute<UserRow[]>(
      "SELECT id, name, email FROM users WHERE id = ?",
      [id]
    );
    return rows[0];
  }

  // authenticate user by email and password
  
  static async authenticateByEmail(email: string, password: string) {
    const [rows] = await db.execute<UserRow[]>(
      "SELECT id, name, email FROM users WHERE email = ? AND password = ?",
      [email, password]
    );
    return rows[0];
  
  }

}

export default User;
