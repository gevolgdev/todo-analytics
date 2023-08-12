import { Request, Response } from "express";
import db from "../../database/db";

const newFriend = async ( req: Request, res: Response ): Promise<any> => {

  const { id, friend_id } = req.body;

  try {
    const insertQuery = 'INSERT INTO `users-schema`.`friendships` (`id`, `friend_id`) VALUES (?, ?);';
    const users = await db.query(insertQuery, [ id, friend_id ]);

    console.log( users );
    res.json({ users });
  } catch (err) {
    console.log('Erro no newFriend: ', err);
    res.json({ Error: err });
  };
};

export default newFriend;