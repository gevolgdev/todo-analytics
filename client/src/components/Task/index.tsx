import React from 'react';
import { TaskProps } from '../../@types/types';
import Container from './style';
import { BsCalendarDateFill, BsCheck } from 'react-icons/bs';


const Task: React.FC<TaskProps> = ({ title, description, date, done, index }) => {

  let isDone: boolean = false;
  const setIsDone = () => {
    if(done == '0') return isDone = false;
    if(done == '1') return isDone = true;
  };

  setIsDone();

  return (
    <Container isDone={ isDone }>
      <span className='date'><BsCalendarDateFill/> { date }</span>
      <header>
        <button onClick={ () => console.log( index ) }>
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