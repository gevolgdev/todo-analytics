import { Request, Response } from "express";
import db from "../database/db";

export const getTasks = async ( req: Request, res: Response ): Promise<any> => {
  const user_id = req.query.user_id;
  try {
    const insertQuery = 'SELECT * FROM `users_tasks` WHERE `user_id` = ?';
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

// export const addTask = async ( req: Request, res: Response ) => {
//   const { id, title, description, date, done } = req.body;

//   try {
//     const insertQuery = 'INSERT INTO `users-schema`.`users_tasks` (`user_id`, `title`, `description`, `date`, `done`) VALUES (?, ?, ?, ?, ?);';
//     db.query(insertQuery, [ id, title, description, date, done ]);
//     res.status(201).json({ message: 'Task added successfully' });

//   } catch (err) {
//     console.log('Erro no addNewTask: ', err);
//     res.status(500).json({ error: 'An error occurred while adding the task' });
//   };
// };