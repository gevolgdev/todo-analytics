import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TaskProps } from "../../../@types/types";
import completeTask from "../../../utils/Api/completeTask";

interface completeTaskProps {
  title: string;
  id: number | undefined;
  doneTask: string;
  description: string;
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
      return payload;
    },
    completeTaskReducer: ( state, { payload }: PayloadAction<completeTaskProps> ) => {
      const { doneTask, id: user_id , title, description, token } = payload;
      state.map(item => {
        if(item.title === title && item.user_id === user_id) {
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
export const { completeTaskReducer } = tasksSlice.actions;
export default tasksSlice.reducer;