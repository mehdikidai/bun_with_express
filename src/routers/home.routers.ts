import express from "express";
import auth from "../middleware/auth.middleware";
import homeController from "../controllers/home.controller";

const router = express.Router();

router.get("/", auth, homeController.getHome);

export default router;
