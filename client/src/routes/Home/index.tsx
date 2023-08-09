import { useEffect, useState } from 'react';
import { Container, Image } from './style';
import { Header, Menu } from '../../components/Home';
import IMG from '../../assets/space-icon.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../lib/redux/reducer';
import Task from '../../components/Task';
import { useDispatch } from 'react-redux';
import fetchUserTasks from '../../utils/Api/tasks/fetchUserTasks';
import { HiMenuAlt2 } from 'react-icons/hi';
import fetchUsersUtils from '../../utils/Api/users/fetchUsersUtils';

const Home = () => {

  const { id, token } = useSelector(( state: RootState ) => state.userSlice);
  const Dispatch = useDispatch();
  const tasksList = useSelector((state: RootState) => state.tasksSlice.slice(1));
  const [ menu, setMenu ] = useState<boolean>(false);

  useEffect( () => {
    fetchUserTasks({ id, token }, Dispatch);
    fetchUsersUtils({ token }, Dispatch);
  }, []);

  return (
    <>
      { menu && <Menu setMenu={setMenu}/> }


      <Image>
        <button className="menuButton" onClick={ () => setMenu(true) }>
          <HiMenuAlt2/>
        </button>

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