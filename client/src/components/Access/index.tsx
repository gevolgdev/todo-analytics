import saveInfos from '../../utils/saveInfos'
import authUtils from '../../utils/authUtils';
import { useNavigate } from "react-router-dom";
import { Container, Links } from './style';

interface AccessProps {
  isLogin?: boolean,
  isRegister?: boolean,
};

const Access: React.FC<AccessProps> = ({ isLogin = false, isRegister = false }) => {

  const { infos, saving, clearInputs } = saveInfos();
  const { login, register } = authUtils();
  const navigate = useNavigate();

  let access: string = String(isLogin && 'Login' || isRegister && 'Registrar');

  const handleClick = () => {
    if(isLogin) {
      login(infos.email, infos.password);
    };
    if(isRegister) {
      register(infos.name, infos.email, infos.password);
    };

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

      {isLogin && <Links to={'/register'}>Não tem uma conta? <strong>crie uma!</strong></Links>}
      {isRegister && <Links to={'/login'}>Já tem uma conta? <strong>entre aqui!</strong></Links>}

      <button onClick={ handleClick } className='enter'>{ access }</button>
    </Container>
  )
};

export default Access;