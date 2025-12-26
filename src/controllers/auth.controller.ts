import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import Config from "../configs/app.config";
import type { LoginRequestBody } from "../types/Login";

class AuthController {

  // User login

  login(req: Request, res: Response) {

    const { username, password } = req.body as LoginRequestBody;

    if (username === "admin" && password === "password") {
      const token = jwt.sign({ username }, Config.JWT_SECRET, {
        expiresIn: "1h",
      });

      res.json({ message: "Login successful!", token });

    } else {

      res.status(401).json({ message: "Invalid credentials." });

    }
  }

  // User logout

  logout(req: Request, res: Response) {           
    res.json({ message: "Logout successful!" });
  }
  
}

export default new AuthController();
