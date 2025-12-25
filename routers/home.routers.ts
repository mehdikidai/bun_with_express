import express from "express";
import auth from "../middleware/auth.middleware";

const router = express.Router();

router.get("/", auth, (req, res) => {
  res.json({ message: `Welcome to the Home Page, ${req.user?.username}!` });
});

export default router;
