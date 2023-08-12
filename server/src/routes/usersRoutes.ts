import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { fetchFriends, getUsers, newFriend } from "../controllers/users";

const router = express.Router();

router.get('/get-users', authMiddleware, getUsers);
router.get('/get-friends', authMiddleware, fetchFriends);
router.post('/new-friend', authMiddleware, newFriend);
export default router;