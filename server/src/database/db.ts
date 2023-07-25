import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Ricardo20@',
  database: 'users-schema',
});

db.getConnection()
  .then(() => console.log('Conectado ao banco de dados!'))
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err.message);
    process.exit(1);
  });

export default db;