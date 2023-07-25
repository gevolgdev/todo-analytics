import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Link to={'/login'}>Login</Link> <br/>
      <Link to={'/register'}>Registrar-se</Link>
    </>
  );
};

export default Home;