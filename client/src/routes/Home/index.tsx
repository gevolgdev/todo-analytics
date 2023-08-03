import { useEffect } from 'react';
import { Container, Image } from './style';
import { Header } from '../../components/Home';
import IMG from '../../assets/space-icon.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../lib/redux/reducer';
import Task from '../../components/Task';
import { useDispatch } from 'react-redux';
import fetchUserTasks from '../../utils/Api/fetchUserTasks';

const Home = () => {

  const { id, token } = useSelector(( state: RootState ) => state.userSlice);
  const Dispatch = useDispatch();
  const tasksList = useSelector((state: RootState) => state.tasksSlice);

  useEffect( () => {
    fetchUserTasks({ id, token }, Dispatch);
  }, []);

  return (
    <>
      <Image>
        <img src={IMG}/>
      </Image>

      <Header/>

      <Container>
        {/* <h1>Suas tarefas:</h1> */}
        <div className='tasks'>
          {tasksList.map(task => <Task key={ task.id } { ...task }/>)}
        </div>
      </Container>
    </>
  );
};

export default Home;