import GlobalStyle from './style/GlobalStyle';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Outlet/>
    </>
  );
};

export default App;
