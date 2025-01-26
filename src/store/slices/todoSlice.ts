import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Todo, TodoState } from '../../types';

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    updateTodoPriority: (state, action: PayloadAction<{ id: string; priority: Todo['priority'] }>) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.priority = action.payload.priority;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, updateTodoPriority } = todoSlice.actions;
export default todoSlice.reducer;