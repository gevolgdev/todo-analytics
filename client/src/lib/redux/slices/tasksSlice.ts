import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DeleteTaskProps, EditTaskProps, TaskProps, addTaskProps, completeTaskProps } from "../../../@types/types";
import completeTask from "../../../utils/Api/tasks/completeTask";
import addNewTask from "../../../utils/Api/tasks/addNewTask";
import editTasks from "../../../utils/Api/tasks/editTask";
import deleteTask from "../../../utils/Api/tasks/deleteTask";

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


    editTaskReducer: (state, { payload }: PayloadAction<EditTaskProps>) => {
      const { title, description, user_id, task_id, token } = payload;
      state.map(item => {
        if(item.id === task_id && item.user_id === user_id) {
          item.title = title;
          item.description = description;
        };

        return item;
      });

      editTasks({ title, description, user_id, task_id }, token);
    },


    deleteTaskReducer: (state, { payload }: PayloadAction<DeleteTaskProps>) => {
      const { task_id, token } = payload;
      const index = state.findIndex(item => item.id === task_id);
      state.map(item => {
        if(item.id === task_id) {
          state.splice(index, 1);
        };
        return item;
      });
      
      deleteTask({ task_id }, token);
    },


  }
});

export const { fetchTasks } = tasksSlice.actions;
export const { addTaskReducer } = tasksSlice.actions;
export const { completeTaskReducer } = tasksSlice.actions;
export const { editTaskReducer } = tasksSlice.actions;
export const { deleteTaskReducer } = tasksSlice.actions;
export default tasksSlice.reducer;