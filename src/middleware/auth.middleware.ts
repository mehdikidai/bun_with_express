import jwt from "jsonwebtoken";
import Config from "../configs/app.config";
import type { Request, Response, NextFunction } from "express";
import type { JwtPayload } from "jsonwebtoken";


export default function auth(req: Request, res: Response, next: NextFunction) {
  
  const authHeader = req.headers.authorization as string;

  if (!authHeader || !authHeader.startsWith("Bearer "))
    return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1] as string;

  try {

    const decoded = jwt.verify(token, Config.JWT_SECRET) as JwtPayload;
    req.user = decoded;
    return next();

  } catch {

    return res.status(401).json({ message: "Invalid or expired token" });
  }
}
