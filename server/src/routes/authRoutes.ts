import express from "express";
import { register, login } from "../controllers/authController";
import { authMiddleware } from '../middlewares/authMiddleware';
import { taskController } from "../controllers/tasksController";

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/tasks', authMiddleware, taskController);

export default router;