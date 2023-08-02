import React from 'react';
import { TaskProps } from '../../@types/types';
import Container from './style';
import { BsCalendarDateFill, BsCheck } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../lib/redux/reducer';
import { completeTaskReducer } from '../../lib/redux/slices/tasksSlice';


const Task: React.FC<TaskProps> = ({ title, description, date, done }) => {

  const Dispatch = useDispatch();

  const { id, token } = useSelector(( state: RootState ) => state.userSlice);

  const completedTask = () => {
    Dispatch(completeTaskReducer({ id , title, description, token} ));
    console.log('Task: ', done);
  };

  return (
    <Container done={ done }>
      <span className='date'><BsCalendarDateFill/> { date } - { done }</span>
      <header>
        <button onClick={ completedTask }>
          { done == '1' && <BsCheck/> }
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