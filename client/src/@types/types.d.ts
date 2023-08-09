export type EventProps = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

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
  user_id?: number;
  title: string;
  description: string;
  date: string;
  done: string;
  index?: number;
};

export interface NewTaskProps {
  id: number;
  title: string;
  description: string;
  date: string;
  done: string;
};

export interface completeTaskProps {
  title: string;
  id: number | undefined;
  description: string;
  token: string;
};

export interface addTaskProps {
  newTask: TaskProps;
  token: string;
};

export interface EditTaskProps {
  title: string;
  description: string;
  user_id: number;
  task_id: number;
  token: string;
};

export interface DeleteTaskProps {
  task_id: number;
  token: string;
};