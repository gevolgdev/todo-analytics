import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { getTasks, addTask, completeTask } from "../controllers/tasksController";

const router = express.Router();

router.get('/get-tasks', authMiddleware, getTasks);
router.post('/new-task', authMiddleware, addTask);
router.post('/complete-task', authMiddleware, completeTask);

export default router;