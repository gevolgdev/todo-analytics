import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../lib/redux/reducer";
import { TaskProps } from "../../@types/types";
import api from "../../service";


const getTasks = () => {

  const { id, token } = useSelector(( state: RootState ) => state.userSlice);
  
  const INITIAL_STATE: TaskProps[] = [{ id: 0, user_id: 0, title: '', description: '', date: '', done: ''}];
  const [ tasks, setTasks ] = useState<TaskProps[]>(INITIAL_STATE);
  
  useEffect(() => {
    api.get('/tasks/get-tasks', {
      headers: { Authorization: `Bearer ${token}` },
      params: { user_id: id }
    })
      .then (response => setTasks(response.data.tasks[0]))
      .catch (err => (setTasks(err), console.log('Erro no getTasks.ts')));
  }, []);

  return { tasks };
};

export default getTasks;