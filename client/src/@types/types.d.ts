export interface UserProps {
  id?: number;
  email: string;
  name: string;
  password: string;
  token: string;
  isAuthenticated: boolean;
};

export interface TaskProps {
  id: number;
  user_id: number;
  title: string;
  description: string;
  date: string;
  done: string;
};