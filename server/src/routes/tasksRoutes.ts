import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { getTasks, addTask } from "../controllers/tasksController";

const router = express.Router();

router.get('/get-tasks', authMiddleware, getTasks);
router.post('/new-task', authMiddleware, addTask);

export default router;