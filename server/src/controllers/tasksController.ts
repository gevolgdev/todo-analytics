import { Request, Response } from "express";
import db from "../database/db";

export const taskController = async ( req: Request, res: Response ): Promise<any> => {
  const user_id = req.query.user_id;
  try {
    const insertQuery = 'SELECT * FROM `todo_lists` WHERE `user_id` = ?';
    const tasks = await db.query(insertQuery, [user_id]);

    console.log( tasks );
    res.json({ tasks });

  } catch (err) {
    res.json({ Error: err });
  };
};