import type { RowDataPacket } from "mysql2";
import db from "../../database/db";
import Hash from "../../core/helper/hash.helper";

type UserRow = RowDataPacket & {
  id: number;
  name: string;
  email: string;
  password: string;
};

class Auth {

  static async attempt(email: string, password: string) {
    const [rows] = await db.execute<UserRow[]>(
      "SELECT id, name, email, password FROM users WHERE email = ?",
      [email]
    );

    if (!rows.length) return null;

    const user = rows[0];

    if (!user) return null;

    const isValid = await Hash.check(password, user.password);
    if (!isValid) return null;

    const { password: _, ...safeUser } = user;

    return safeUser;
  }
  
}

export default Auth;
