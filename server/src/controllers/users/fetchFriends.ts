import { Request, Response } from "express";
import db from "../../database/db";


const fetchFriends = async (req: Request, res: Response) => {
  const { id } = req.query;

  try {
    const insertQuery = 'SELECT friend_id FROM `users-schema`.friendships WHERE `id` = ?';
    const friends = await db.query(insertQuery, [ id ]);

    res.json({ friends });
    console.log(friends);
  } catch (error) {
    res.json({ Error: error });
    console.log('Erro em fetchFriends: ', error);
  };
};

export default fetchFriends;