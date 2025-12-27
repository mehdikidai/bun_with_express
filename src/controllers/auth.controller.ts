import jwt from "jsonwebtoken";
import Config from "../configs/app.config";
import type { Request, Response } from "express";
import type { LoginRequestBody } from "../types/Login";
import Auth from "../core/helper/auth.helper";

class AuthController {
  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body as LoginRequestBody;

      if (!email || !password)
        return res.status(401).json({ message: "Invalid credentials" });

      const user = await Auth.attempt(email, password);

      if (!user)
        return res.status(401).json({ message: "Invalid credentials" });

      const token = jwt.sign({ email, name: user.name }, Config.JWT_SECRET, {
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

export default AuthController;
