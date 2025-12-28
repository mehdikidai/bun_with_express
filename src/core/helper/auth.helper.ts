import type { RowDataPacket } from "mysql2";
import type { User } from "../../types/user";

import db from "../../database/db";
import Hash from "../../core/helper/hash.helper";

type UserRow = RowDataPacket & User;
type AuthenticatedUser = Omit<User, "password">;


class Auth {
  /**
   * Attempt to authenticate a user with email and password
   * @param email User's email
   * @param password User's password
   * @returns User object without password if valid, otherwise null
   */
  static async attempt(email: string, password: string) : Promise<AuthenticatedUser | null> {
    // Fetch user by email
    const [rows] = await db.execute<UserRow[]>(
      "SELECT id, name, email, password FROM users WHERE email = ?",
      [email]
    );

    if (!rows.length) return null;

    const user = rows[0] as UserRow;

    // Check if password matches
    const isValid = await Hash.check(password, user.password);
    
    if (!isValid) return null;

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };

  }
}

export default Auth;
