import React from 'react';
import { TaskProps } from '../../@types/types';
import Container from './style';
import { BsCalendarDateFill, BsCheck } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../lib/redux/reducer';
import { completeTaskReducer } from '../../lib/redux/slices/tasksSlice';


const Task: React.FC<TaskProps> = ({ title, description, date, done }) => {

  const Dispatch = useDispatch();

  let isDone: boolean = false;
  const setIsDone = () => {
    if(done == '0') return isDone = false;
    if(done == '1') return isDone = true;
  };
  setIsDone();

  const { id, token } = useSelector(( state: RootState ) => state.userSlice);

  const completedTask = () => {
    const doneTask: string = String( done == '0' && '1' || done == '1' && '0');
    Dispatch(completeTaskReducer({ doneTask, id , title, description, token} ));
  };

  return (
    <Container isDone={ isDone }>
      <span className='date'><BsCalendarDateFill/> { date }</span>
      <header>
        <button onClick={ completedTask }>
          { isDone && <BsCheck/> }
        </button>
        <h2 className='title'>{ title }</h2>
      </header>
      <p className='desc'><span>Detalhe:</span> { description }</p>

      <div className='buttons'>
        <button className='edit'>Editar</button>
        <button className='del'>Deletar</button>
      </div>
    </Container>
  );
};

export default Task;