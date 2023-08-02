import React, { ChangeEvent, SetStateAction, useState } from 'react';
import { Buttons, Container, Content } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../lib/redux/reducer';
import { FaRegLightbulb } from 'react-icons/fa';
import { editTaskReducer } from '../../../lib/redux/slices/tasksSlice';

interface TaskFormProps {
  title: string;
  description: string;
  task_id: number;
  setOpenForm: React.Dispatch<SetStateAction<boolean>>;
};

interface EditTaskProps {
  title: string;
  description: string;
};

const EditTaskForm: React.FC<TaskFormProps> = ({ title, description, setOpenForm, task_id }) => {

  const { id, token } = useSelector(( state: RootState ) => state.userSlice);
  const Dispatch = useDispatch();

  const INITIAL_STATE = { title, description };
  const [editTask, setEditTask] = useState<EditTaskProps>(INITIAL_STATE);

  const saving = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setEditTask(prev => ({...prev, [id]: value}));
  };

  const editTasks = () => {
    const user_id: number = typeof id === 'number' ? id : 0;
    const { title, description } = editTask;
    Dispatch(editTaskReducer({ title, description, user_id, task_id, token }));
    setOpenForm(false);
  };

  return (
    <Container>
      <Content>
        <h1>
          <FaRegLightbulb fontSize={'1.5rem'}/>
          <span>Pense, edite<br/> e conclua!</span>
        </h1>
        <div className="inputs">
          <div className='input'>
            <label>Título</label>
            <input onChange={ saving } type='text' id='title' value={ editTask.title }/>
          </div>

          <div className='input'>
            <label>Descrição</label>
            <input onChange={ saving } type='text' id='description' value={ editTask.description }/>
          </div>
        </div>

        <Buttons>
          <button className='add' onClick={ editTasks }>
            Editar
          </button>
          <button className='cancel' onClick={ () => setOpenForm(false) }>Cancelar</button>
        </Buttons>
      </Content>
    </Container>
  );
};

export default EditTaskForm;