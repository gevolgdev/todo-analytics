import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { getUsers } from "../controllers/users";

const router = express.Router();

router.get('/get-users', authMiddleware, getUsers);
export default router;