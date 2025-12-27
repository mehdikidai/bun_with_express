import User from "../model/user.model";
import type { Request, Response } from "express";

class UsersController {
    
  static async getAllUsers(req: Request, res: Response) {
    const users = await User.findAll();
    res.json(users);
  }

  static async getUserById(req: Request, res: Response) {

    const userId = Number(req.params.id) as number | undefined;

    if (!userId) {
      res.status(400).json({ message: "User ID is required" });
      return;
    }
    const user = await User.findById(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  }
}

export default UsersController;
