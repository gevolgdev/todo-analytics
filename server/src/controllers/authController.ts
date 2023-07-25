import { Request, Response } from "express";
import UserProps from "../models/user";
import { hashPassword, comparePasswords, generateToken } from "../services/authService";
import db from '../database/db';

export const usersDB: UserProps[] = [];

export const register = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password } = req.body;
  const hashedPassword = await hashPassword(password);

  try {
    const insertQuery = 'INSERT INTO `users` (`name`, `email`, `password`) VALUES (?, ?, ?)';
    await db.query(insertQuery, [name, email, hashedPassword]);

    const newUser: UserProps = {
      name: name,
      email: email,
      password: hashedPassword,
    };

    const token = generateToken(newUser);
    res.json({ user: newUser, token });
    
  } catch (error) {
    console.error('Erro ao registrar o usuário:', error);
    res.status(500).json({ message: 'Erro ao registrar o usuário.' });
  }
};

export const login = async (req: Request, res: Response): Promise<any> => {
  const { email, password } = req.body;

  try {
    const selectQuery = 'SELECT * from `users` WHERE `email` = ?';
    const [rows] = await db.query(selectQuery, [email]);

    if (!Array.isArray(rows) || rows.length === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    const user: UserProps = rows[0] as UserProps;

    const isPasswordValid = await comparePasswords(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credenciais inválidas.' });
    }

    const token = generateToken(user);
    res.json({ user, token });
  } catch (error) {
    console.error('Erro ao realizar o login:', error);
    res.status(500).json({ message: 'Erro ao realizar o login.' });
  }
};
