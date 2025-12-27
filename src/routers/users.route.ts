import express from "express";
import UsersController from "../controllers/users.controller";

const router = express.Router();

router.get('/',UsersController.getAllUsers);
router.get('/:id',UsersController.getUserById);
router.post('/',UsersController.createUser);

export default router;
