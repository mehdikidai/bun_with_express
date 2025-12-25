import express from "express";
import auth from "../middleware/auth.middleware";
import BooksController from "../controllers/books.controller";

const router = express.Router();

router.get("/", auth, BooksController.getAllBooks);

export default router;
