import api from "../../service";

interface deleteProps {
  task_id: number;
};

const deleteTask = async ({ task_id }: deleteProps, token: string) => {
  try {
    await api.post('/tasks/delete-task', { task_id }, {
      headers: { Authorization: `Bearer ${token}`}
    });
  } catch (error) {
    console.log(error);
  }
};

export default deleteTask;