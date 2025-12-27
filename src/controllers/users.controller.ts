
import Hash from "../core/helper/hash.helper";
import User from "../model/user.model";
import type { Request, Response } from "express";

class UsersController {
  static async getAllUsers(req: Request, res: Response) {
    const users = await User.all();
    res.json(users);
  }

  static async getUserById(req: Request, res: Response) {
    const userId = Number(req.params.id) as number | undefined;

    if (!userId) {
      res.status(400).json({ message: "User ID is required" });
      return;
    }
    const user = await User.find(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  }

  static async createUser(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const passwordHash = await Hash.make(password);
    const userId = await User.create({ name, email, password: passwordHash });
    res.status(201).json({ id: userId, name, email });
  }
}

export default UsersController;
