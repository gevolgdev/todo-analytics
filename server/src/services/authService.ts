import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserProps from '../models/user';
import dotenv from 'dotenv';
dotenv.config();

const saltRounds: number = 10;
const SECRET_KEY: string = 'ricardopinelli123@';

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(saltRounds);

  return bcrypt.hash(password, salt);
};

export const comparePasswords = async (
  password: string,
  hashedPassword: string
  ): Promise<boolean> => {

  return bcrypt.compare(password, hashedPassword);
};

export const generateToken = (user: UserProps): string => {
  const payload = {id: user.id, email: user.email, username: user.name};
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

  return token;
};

export const verifyToken = async (token: string): Promise<any> => {

  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if(err) {
        return reject(err);
      }

      resolve(decoded as UserProps);
    });
  });
};