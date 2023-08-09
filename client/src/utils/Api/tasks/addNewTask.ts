import api from '../../../service';
import { NewTaskProps } from '../../../@types/types';

const addNewTask = async ({ id, title, description, date, done }: NewTaskProps, token: string) => {
  
  const newTask: NewTaskProps = { id, title, description, date, done };
  
  try {
    const response = await api.post('/tasks/new-task', newTask , {
      headers: { Authorization: `Bearer ${token}` }
    })
    console.log('addNewTask ', response.data);
  } catch (err) {
    console.log('Error no front-end ', err);
  };
};

export default addNewTask;