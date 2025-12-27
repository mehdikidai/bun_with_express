import type { Request, Response } from "express";

class HomeController {
  static getHome(req: Request, res: Response) {
    res.send("Welcome to the Home Page!");
  }
}

export default HomeController;
