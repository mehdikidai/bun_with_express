import type { Request, Response } from "express";

class HomeController {
  getHome(req: Request, res: Response) {
    res.send("Welcome to the Home Page!");
  }
}

export default new HomeController();
