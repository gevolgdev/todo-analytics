import api from '../../service';

interface completeTaskProps {
  title: string;
  id: number | undefined;
  doneTask: string;
  description: string;
};

const completeTask = async ( { doneTask, id: user_id, title, description }: completeTaskProps, token: string ) => {
  try {
    await api.post('/tasks/complete-task', { doneTask, user_id, title, description }, {
      headers: { Authorization: `Bearer ${token}`}
    });
  }
  catch (err) {
    console.log('✕ Erro em completar task: ', err);
  }
};

export default completeTask;