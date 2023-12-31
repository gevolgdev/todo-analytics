import express from 'express';
import authRoutes from './routes/authRoutes';
import tasksRoutes from './routes/tasksRoutes';
import usersRoutes from './routes/usersRoutes';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/tasks', tasksRoutes);
app.use('/users', usersRoutes);

app.listen(port, () => {
  console.log(`Server is running in ${port}!`);
});
