import { Request, Response } from "express";
import db from "../../database/db";

const addTask = async ( req: Request, res: Response ) => {
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

export default addTask;