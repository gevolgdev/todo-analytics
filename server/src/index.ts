import express from 'express';
import RequestProps from './models/RequestProps';

const app = express();
const port = 3000;

app.get('/', ({ req, res }: RequestProps) => {
  res.send('Hello server');
});

app.listen(port, () => {
  console.log(`Server is running in ${port}!`);
});
