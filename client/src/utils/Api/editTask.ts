import api from "../../service";

interface EditTaskProps {
  title: string;
  description: string;
  user_id: number;
  task_id: number;
};

const editTasks = async ({ title, description, user_id, task_id }: EditTaskProps, token: string) => {
  try {
    await api.post('/tasks/edit-task', { title, description, user_id, task_id }, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
  catch (err) {
    console.log(err);  
  }
};

export default editTasks;