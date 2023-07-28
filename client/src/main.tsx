import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Home, Login, Register } from './routes';
import App from './App.tsx'
// Redux
import { Provider } from 'react-redux';
import store from './lib/redux/store';
import { RootState } from './lib/redux/reducer.ts';

const AuthenticatedRoute = () => {
  const isAuthenticated = useSelector(( state: RootState ) => state.userSlice.isAuthenticated);
  return isAuthenticated ? <Home/> : <Register/>
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <AuthenticatedRoute/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
