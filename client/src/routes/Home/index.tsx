import getTasks from '../../utils/Api/getTasks';
import { Container, Image } from './style';
import { Header } from '../../components/Home';
import Task from '../../components/Task';
import IMG from '../../assets/img-todo.svg';

const Home = () => {

  const { tasks } = getTasks();
  const tasksList = Array.isArray(tasks) ? tasks : [];

  return (
    <>
      <Image>
        <img src={IMG}/>
      </Image>

      <Header/>

      <Container>
        <h1>Suas tarefas:</h1>
        <div className='tasks'>
          {tasksList.map((task, index) => (
            <Task key={ task.id } { ...task } index={ index }/>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Home;