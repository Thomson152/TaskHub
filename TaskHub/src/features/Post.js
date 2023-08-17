import { createSlice } from '@reduxjs/toolkit';
import tasks from '../data';

const initialState = {
  tasks: tasks,
  isLoading: false,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    deleteTask: (state, action) => {
      const itemId = action.payload;
      state.tasks = state.tasks.filter((item) => item.id !== itemId);
    },
  },
});

export const { deleteTask } = postSlice.actions;
export default postSlice.reducer;
