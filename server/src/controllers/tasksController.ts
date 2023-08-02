import { Request, Response } from "express";
import db from "../database/db";

export const getTasks = async ( req: Request, res: Response ): Promise<any> => {
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

export const addTask = async ( req: Request, res: Response ) => {
  const { id, title, description, date, done } = req.body;

  try {
    const insertQuery = 'INSERT INTO `users-schema`.`users_tasks` (`user_id`, `title`, `description`, `date`, `done`) VALUES (?, ?, ?, ?, ?);';
    db.query(insertQuery, [ id, title, description, date, done ]);
    res.status(201).json({ message: 'Task added successfully' });

  } catch (err) {
    console.log('Erro no addNewTask: ', err);
    res.status(500).json({ error: 'An error occurred while adding the task' });
  };
};

export const completeTask = async ( req: Request, res: Response ) => {
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

export const editTask = async ( req: Request, res: Response ) => {
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

export const deleteTask = async ( req: Request, res: Response ) => {
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