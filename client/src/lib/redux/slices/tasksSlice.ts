import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TaskProps } from "../../../@types/types";
import completeTask from "../../../utils/Api/completeTask";
import addNewTask from "../../../utils/Api/addNewTask";

interface completeTaskProps {
  title: string;
  id: number | undefined;
  description: string;
  token: string;
};

interface addTaskProps {
  newTask: TaskProps;
  token: string;
};

const initialState: TaskProps[] = [
  {
    id: 0,
    user_id: 0,
    title: '',
    description: '',
    date: '',
    done: '',
  }
];

const tasksSlice = createSlice({
  name: 'TasksSlice',
  initialState,
  reducers: {
    fetchTasks: ( state, { payload }: PayloadAction<TaskProps[]> ) => {
      state = payload;

      return state;
    },
    addTaskReducer: ( state, { payload }: PayloadAction<addTaskProps>) => {
      const { newTask, token } = payload;
      state.push( newTask );
      addNewTask(newTask, token);

      return state;
    },
    completeTaskReducer: ( state, { payload }: PayloadAction<completeTaskProps> ) => {
      const { id: user_id , title, description, token } = payload;

      let doneTask: string = '';
      state.map(item => {
        doneTask = String( item.done == '0' && '1' || item.done == '1' && '0');
        if (item.title === title && item.user_id === user_id) {
          item.done = doneTask;
        };

        return item;
      });
      completeTask({ doneTask, id: user_id , title, description}, token);

      return state;
    },

  }
});

export const { fetchTasks } = tasksSlice.actions;
export const { addTaskReducer } = tasksSlice.actions;
export const { completeTaskReducer } = tasksSlice.actions;
export default tasksSlice.reducer;