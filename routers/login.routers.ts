import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/", (req, res) => {
  const { username, password } = req.body as {
    username?: string;
    password?: string;
  };

  if (username === "admin" && password === "password") {

    const token = jwt.sign({ username }, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful!", token });

  } else {
    res.status(401).json({ message: "Invalid credentials." });
  }
});

export default router;
