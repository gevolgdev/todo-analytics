import { Request, Response } from "express";
import db from "../../database/db";


const editTask = async ( req: Request, res: Response ) => {
  const { title, description, user_id, task_id } = req.body;
  try {
    const insertQuery = 'UPDATE `users-schema`.`users_tasks` SET `title` = ?, `description` = ? WHERE `user_id` = ? AND `id` = ?';
    db.query(insertQuery, [ title, description, user_id, task_id ]);
    res.status(201).json({ message: 'Tarefa editada!' });
  }
  catch (err) {
    console.log('Erro ao editar (Controller): ', err);
    res.status(500).json({ error: 'An error occurred while editing the task' });
  }
};

export default editTask;