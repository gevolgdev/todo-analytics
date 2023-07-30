import api from "../service";
import { useDispatch } from 'react-redux';
import { setData } from "../lib/redux/slices/userSlice";
import { UserProps } from "../@types/types";

interface AuthResponse {
  user: UserProps;
  token: string;
}

const useAuth = () => {
  const Dispatch = useDispatch();
  
  const login = async (email: string, password: string): Promise<AuthResponse> => {
    try {
      const response = await api.post('/auth/login', {
        email: email,
        password: password,
      })
      console.log('Logado!');
      console.log(response.data);

      const { user, token } = response.data;
      const loginData = {
        ...user,
        token,
        isAuthenticated: true,
      };
      Dispatch(setData(loginData));

      return response.data as AuthResponse;
    }
    catch (error) {
      console.log('Erro de login: ' + error);
      throw error;
    };
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      const response = await api.post('/auth/register', {
        name: name,
        email: email,
        password: password,
      });
      console.log('Registrado!');

      const { user, token} = response.data;

      const newUser: UserProps = {
        ...user,
        token,
        isAuthenticated: true,
      };
      Dispatch(setData(newUser));

      return response.data as AuthResponse;
    }
    catch(error) {
      console.log('Erro de registro: ' + error);
    };
  };

  return {
    login,
    register,
  };
};


export default useAuth;