import { Request, Response } from "express";
import db from "../../database/db";


const completeTask = async ( req: Request, res: Response ) => {
  const { doneTask, user_id, title, description } = req.body;

  try {
    const insertQuery = 'UPDATE `users-schema`.`users_tasks` SET `done` = ? WHERE `user_id` = ? AND title = ? AND description = ?';
    db.query(insertQuery, [ doneTask, user_id, title, description ]);
    res.status(201).json({ message: 'Task completada!' });

  } catch (err) {
    console.log('Erro no completeTask: ', err);
    res.status(500).json({ error: 'An error occurred while completing the task' });
  };
};

export default completeTask;