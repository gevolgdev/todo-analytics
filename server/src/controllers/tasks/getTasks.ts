import { Request, Response } from "express";
import db from "../../database/db";

const getTasks = async ( req: Request, res: Response ): Promise<any> => {
  const user_id = req.query.user_id;
  try {
    const insertQuery = 'SELECT * FROM `users-schema`.`users_tasks` WHERE `user_id` = ?';
    const tasks = await db.query(insertQuery, [user_id]);

    console.log( tasks );
    res.json({ tasks });

  } catch (err) {
    console.log('Erro no getTasks: ', err);
    res.json({ Error: err });
  };
};

export default getTasks;