// import React from 'react';
import { RootState } from '../../../lib/redux/reducer';
import { Container } from './style';
import { useSelector } from 'react-redux';
import { MdOutlineAdd } from 'react-icons/md';
import { useState } from 'react';
import NewTaskForm from '../NewTaskForm';

const Header = () => {

  const [ openForm, setOpenForm ] = useState<boolean>(false);

  const name: string = useSelector((state: RootState) => state.userSlice.name);

  return (
    <Container>
      { openForm && <NewTaskForm setOpenForm={ setOpenForm }/> }

      <div className='texts'>
        <span className='welcome'>Oi, {name}</span>
        <span className='hello'>Pronto para concluir<br/> suas tarefas?</span>
      </div>

      <button onClick={ () => setOpenForm(true) }>
        <MdOutlineAdd/>
      </button>
    </Container>
  );
};

export default Header;