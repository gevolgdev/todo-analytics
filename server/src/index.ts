import express from 'express';
import authRoutes from './routes/authRoutes';
import { usersDB } from './controllers/authController';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running in ${port}!`);
});
