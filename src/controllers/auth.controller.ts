import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Config from "../configs/app.config";
import type { Request, Response } from "express";
import type { LoginRequestBody } from "../types/Login";

class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body as LoginRequestBody;

      if (email !== "admin@gmail.com" || !password)
        return res.status(401).json({ message: "Invalid credentials" });

      const passwordHash = await bcrypt.hash("password", 10); // for testing
      const isValid = await bcrypt.compare(password, passwordHash);

      if (!isValid)
        return res.status(401).json({ message: "Invalid credentials" });

      const token = jwt.sign({ email }, Config.JWT_SECRET, {
        expiresIn: "1h",
      });

      return res.status(200).json({
        message: "Login successful!",
        token,
      });
    } catch {
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  }
}

export default new AuthController();
