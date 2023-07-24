import RequestProps from "../models/RequestProps";
import UserProps from "../models/user";
import { hashPassword, comparePasswords, generateToken } from "../services/authService";

const usersDB: UserProps[] = [];

export const register = async ({ req, res }: RequestProps): Promise<void> => {
  const { name, email, password } = req.body;
  const hashedPassword = await hashPassword(password);
  
  const newUser: UserProps = {
    id: Number(usersDB.length + 1),
    name,
    email,
    password: hashedPassword,
  };
  usersDB.push(newUser);

  const token = generateToken(newUser);
  res.json({ user: newUser, token });
};

export const login = async ({ req, res }: RequestProps): Promise<any> => {
  const { email, password } = req.body;
  const user = usersDB.find(item => item.email === email);

  if(!user) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  };

  const isPasswordValid = await comparePasswords(password, user.password);

  if(!isPasswordValid) {
    return res.status(401).json({ message: 'Credênciais inválidas.' });
  };

  const token = generateToken(user);
  res.json({ user, token });
};
