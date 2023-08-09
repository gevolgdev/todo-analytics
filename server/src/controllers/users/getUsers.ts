import { Request, Response } from "express";
import db from "../../database/db";

const getUsers = async ( req: Request, res: Response ): Promise<any> => {

  try {
    const insertQuery = 'SELECT * FROM `users-schema`.users;';
    const users = await db.query(insertQuery);

    console.log( users );
    res.json({ users });

  } catch (err) {
    console.log('Erro no getUsers: ', err);
    res.json({ Error: err });
  };
};

export default getUsers;