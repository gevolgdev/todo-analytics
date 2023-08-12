import saveInfos from '../../utils/saveInfos'
import useAuth from '../../hooks/useAuth';
import { useNavigate } from "react-router-dom";
import { Container, Links } from './style';

interface AccessProps {
  isLogin?: boolean,
  isRegister?: boolean,
};

const Access: React.FC<AccessProps> = ({ isLogin = false, isRegister = false }) => {

  const { infos, saving, clearInputs } = saveInfos();
  const { login, register } = useAuth();
  const navigate = useNavigate();

  let access: string = String(isLogin && 'Entrar' || isRegister && 'Registrar');

  const handleEnter = () => {
    isLogin && login(infos.email, infos.password);
    isRegister && register(infos.name, infos.email, infos.password);

    clearInputs();
    navigate('/');
  };

  return (
    <Container>

      { isRegister && <h1>Bem-vindo(a),<br/> crie sua conta!</h1>}
      { isLogin && <h1>Bem-vindo(a),<br/> de volta!</h1>}

      <div className="inputs">
        { isRegister && 
          <div className='input'>
            <label>Nome</label>
            <input onChange={ saving } type='text' id='name' value={infos.name}/>
          </div> 
        }

        <div className='input'>
          <label>Email</label>
          <input onChange={ saving } type='text' id='email' value={infos.email}/>
        </div>
        
        <div className='input'>
          <label>Senha</label>
          <input onChange={ saving } type='text' id='password' value={infos.password}/>
        </div>
      </div>

      {isLogin && <Links to={'/register'}>Não tem uma conta? <strong>Crie uma!</strong></Links>}
      {isRegister && <Links to={'/login'}>Já tem uma conta? <strong>Entre aqui!</strong></Links>}

      <button onClick={ handleEnter } className='enter'>{ access }</button>
    </Container>
  )
};

export default Access;