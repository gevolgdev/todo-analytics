import React, { ChangeEvent, SetStateAction, useState } from 'react';
import { Buttons, Container, Content } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../lib/redux/reducer';
import { FaRegLightbulb } from 'react-icons/fa';
import { addTaskReducer } from '../../../lib/redux/slices/tasksSlice';
import { NewTaskProps } from '../../../@types/types';
import fetchUserTasks from '../../../utils/Api/fetchUserTasks';

interface TaskFormProps {
  setOpenForm: React.Dispatch<SetStateAction<boolean>>;
};

const NewTaskForm: React.FC<TaskFormProps> = ({ setOpenForm }) => {

  const { id, token } = useSelector(( state: RootState ) => state.userSlice);
  const date: string = new Date().toLocaleDateString();
  const Dispatch = useDispatch();

  const INITIAL_STATE = { id: id, title: '', description: '', date: date, done: '0' };
  const [newTask, setNewTask] = useState<NewTaskProps>(INITIAL_STATE);

  const saving = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setNewTask(prev => ({...prev, [id]: value}));
  };

  const AddNewTasks = () => {
    console.log( newTask );
    Dispatch(addTaskReducer({ newTask, token }));
    fetchUserTasks({ id, token }, Dispatch);
    setOpenForm(false);
  };
  

  return (
    <Container>
      <Content>
        <h1>
          <FaRegLightbulb fontSize={'1.5rem'}/>
          Pense, escreva<br/> e conclua!
        </h1>
        <div className="inputs">
          <div className='input'>
            <label>Título</label>
            <input onChange={ saving } type='text' id='title'/>
          </div>

          <div className='input'>
            <label>Descrição</label>
            <input onChange={ saving } type='text' id='description'/>
          </div>
        </div>

        <Buttons>
          <button className='add' onClick={ AddNewTasks }>
            Adicionar
          </button>
          <button className='cancel' onClick={ () => setOpenForm(false) }>Cancelar</button>
        </Buttons>
      </Content>
    </Container>
  );
};

export default NewTaskForm;