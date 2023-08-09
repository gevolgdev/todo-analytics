import { Request, Response } from "express";
import db from "../../database/db";

const deleteTask = async ( req: Request, res: Response ) => {
  const { task_id } = req.body;
  try {
    const insertQuery = 'DELETE FROM `users-schema`.`users_tasks` WHERE (`id` = ?);';
    db.query(insertQuery, [ task_id ]);
    res.status(201).json({ message: 'Tarefa excluida!' });
  }
  catch (err) {
    console.log('Erro ao editar (Controller): ', err);
    res.status(500).json({ error: 'An error occurred while editing the task' });
  }
};

export default deleteTask;