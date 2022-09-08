import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface todoState {
  id: number;
  title: string;
}

const todoSlice = createSlice({
  name: 'todo',
  initialState: [] as todoState[],
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: Math.floor(Math.random() * 9000) + 1000,
        title: action.payload,
      };
      state.push(newTodo);
    },
    edit: (state, action: PayloadAction<todoState>) => {
      const {
        payload: { id, title },
      } = action;
      const todo: any = state.find((item) => item.id === id);
      todo.title = title;
    },
    remove(state, action: PayloadAction<number>) {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { add, edit, remove } = todoSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTodo = (state: RootState) => state.todo;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default todoSlice.reducer;
