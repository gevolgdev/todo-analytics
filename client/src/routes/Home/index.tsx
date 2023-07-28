import { useSelector } from 'react-redux';
import { RootState } from '../../lib/redux/reducer';
import api from '../../service';
import { useEffect, useState } from 'react';
import { TaskProps } from '../../@types/types';
import { Container } from './style';
// import { GrFormCheckmark } from 'react-icons/gr';

const Home = () => {

  const { id, token } = useSelector(( state: RootState ) => state.userSlice);

  const INITIAL_STATE: TaskProps[] = [{ id: 0, user_id: 0, title: '', description: '', date: '', done: ''}];
  const [ tasks, setTasks ] = useState<TaskProps[]>(INITIAL_STATE);

  useEffect(() => {
    api.get('/auth/tasks', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        user_id: id
      }
    })
      .then (response =>{
        console.log(response.data.tasks[0]);
        setTasks(response.data.tasks[0]);
      })
      .catch (err => {
        console.log(err);
        setTasks(err)
      });
  }, []);

  const name: string = useSelector((state: RootState) => state.userSlice.name);


  return (
    <Container>
      <h1>Bem-vindo(a) {name}</h1>
      <div className='tasks'>
        {tasks.map(task => (
          <div className='task' key={task.id}>
            {task.title}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Home;