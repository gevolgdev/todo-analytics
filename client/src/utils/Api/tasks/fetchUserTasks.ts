import { Dispatch } from "redux";
import api from "../../../service";
import { fetchTasks } from "../../../lib/redux/slices/tasksSlice";

interface FetchTasksProps {
  id: number | undefined;
  token: string;
};

const fetchUserTasks = async ({ id, token }: FetchTasksProps, dispatch: Dispatch) => {
  try {
    const response = await api.get('/tasks/get-tasks', {
      headers: { Authorization: `Bearer ${token}` },
      params: { user_id: id }
    });

    dispatch(fetchTasks(response.data.tasks[0]));
    console.log('Fetch das tasks');
  } catch (err) {
    console.log('Erro no fetchUserTasks.ts: ', err);
  }
};

export default fetchUserTasks;