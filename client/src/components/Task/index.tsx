import React, { useState } from 'react';
import { TaskProps } from '../../@types/types';
import Container from './style';
import { BsCalendarDateFill, BsCheck } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../lib/redux/reducer';
import { completeTaskReducer, deleteTaskReducer } from '../../lib/redux/slices/tasksSlice';
import EditTaskForm from './EditTaskForm';


const Task: React.FC<TaskProps> = ({ title, description, date, done, id: task_id }) => {

  const [openForm, setOpenForm] = useState<boolean>(false);
  const Dispatch = useDispatch();
  const { id, token } = useSelector(( state: RootState ) => state.userSlice);

  const completedTask = () => {
    Dispatch(completeTaskReducer({ id , title, description, token} ));
  };

  const deletedTask = () => {
    Dispatch(deleteTaskReducer({ task_id, token } ));
  };

  return (
    <Container done={ done }>
      {openForm && <EditTaskForm title={title} description={description} setOpenForm={setOpenForm} task_id={task_id}/>}
      <span className='date'><BsCalendarDateFill/> { date }</span>
      <header>
        <button onClick={ completedTask }>
          { done == '1' && <BsCheck/> }
        </button>
        <h2 className='title'>{ title }</h2>
      </header>
      <p className='desc'><span>Detalhe:</span> { description }</p>

      <div className='buttons'>
        <button onClick={ () => setOpenForm( done == '0' && true ) } className='edit'>Editar</button>
        <button onClick={ () => { done == '0' && deletedTask() } } className='del'>Deletar</button>
      </div>
    </Container>
  );
};

export default Task;