import express from 'express';
import authRoutes from './routes/authRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Oi')
});

app.listen(port, () => {
  console.log(`Server is running in ${port}!`);
});
