import { Request, Response, NextFunction } from 'express';
import { verifyToken } from "../services/authService";
import UserProps from '../models/user';

declare module 'express' {
  interface Request {
    user?: UserProps;
  }
}

export const authMiddleware = async (
  req: Request, res: Response, next: NextFunction
): Promise<any> => {

  const token = req.headers.authorization?.split(' ')[1];
  if(!token) {
    return res.status(401).json({ message: 'Token não encontrado!' });
  }

  try {
    const decoded: any = await verifyToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Token inválido!' });
  };
};