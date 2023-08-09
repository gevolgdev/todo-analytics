import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { getTasks, addTask, completeTask, editTask, deleteTask } from "../controllers/tasks";

const router = express.Router();

router.get('/get-tasks', authMiddleware, getTasks);
router.post('/new-task', authMiddleware, addTask);
router.post('/complete-task', authMiddleware, completeTask);
router.post('/edit-task', authMiddleware, editTask);
router.post('/delete-task', authMiddleware, deleteTask);

export default router;