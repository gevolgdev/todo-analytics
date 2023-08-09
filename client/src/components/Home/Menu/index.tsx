import React, { SetStateAction } from 'react'
import { Container, Option } from './style'
import { IoStatsChart } from 'react-icons/io5';
import { HiUsers } from 'react-icons/hi';
import { MdOutlineLogout, MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { LuPalmtree, LuCopyCheck } from 'react-icons/lu';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../lib/redux/slices/userSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../lib/redux/reducer';
import { useNavigate } from 'react-router-dom';


interface MenuProps {
  setMenu: React.Dispatch<SetStateAction<boolean>>
};

const Menu: React.FC<MenuProps> = ({ setMenu }) => {

  const Dispatch = useDispatch();
  const tasksLength: number = useSelector(( state: RootState) => (state.tasksSlice.length - 1));
  const navigate = useNavigate();

  const optionsButtons = [
    { text: 'Estátisticas', icon: <IoStatsChart/>, func: () => {} },
    { text: 'Amigos', icon: <HiUsers/>, func: () => {
      navigate('/social');
    } },
    { text: 'Sair da conta', icon: <MdOutlineLogout/>, func: () => {
      Dispatch(logOut(false));
    } },
    { text: 'Ler mais', icon: <BsFillQuestionCircleFill/>, func: () => {} },
  ];

  return (
    <Container>
      <header>
        <button onClick={ () => setMenu(false) }>
          <MdKeyboardDoubleArrowLeft/>
        </button>
        <h1>
          <LuPalmtree/> Treelife
          <span>Prototype</span>
        </h1>
      </header>

      <div className="mainOptions">
        <Option onClick={ () => navigate('/') }>
          <LuCopyCheck/> Minhas tarefas
          <span className='tasksLength'>{ tasksLength }</span>
        </Option>
      </div>

      <div className='options'>
        { optionsButtons.map((item, index) => (
          <Option onClick={ item.func } key={index}>
            {item.icon} {item.text}
          </Option>
        ))}
      </div>

    </Container>
  );
};

export default Menu;