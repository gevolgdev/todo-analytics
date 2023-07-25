import React, { useState, ChangeEvent } from 'react'
import api from '../../service';

interface InfosProps {
  name: string;
  email: string;
  password: string;
};

const Home = () => {

  const inputStyle: React.CSSProperties = {
    display: 'flex', flexDirection: 'column', alignItems: 'start'
  }

  const INITIAL_STATE = {name: '', email: '', password: ''};
  const [infos, setInfos] = useState<InfosProps>(INITIAL_STATE);

  const saving = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInfos( prev => ({...prev, [id]: value}) );
  };

  const register = () => {
    api.post('/auth/register', {
      name: infos.name,
      email: infos.email,
      password: infos.password,
    })
    .then((response) => {
      console.log('Registrado!' + {response});
      
    })
    .catch((error) => {
      console.log('Erro: ' + error);
      
    });
    
    setInfos(INITIAL_STATE);
    console.log(infos);
    
  };

  return (
    <>
      <div style={ inputStyle }>
        <label>Nome de usuário</label>
        <input onChange={ saving } type='text' id='name' value={infos.name}/>
      </div>

      <br/>

      <div style={inputStyle}>
        <label>Email</label>
        <input onChange={ saving } type='text' id='email' value={infos.email}/>
      </div>

      <br/>
      
      <div style={inputStyle}>
        <label>Senha</label>
        <input onChange={ saving } type='text' id='password' value={infos.password}/>
      </div>

      <br/>

      <button onClick={ register }>Registrar</button>
    </>
  );
};

export default Home;