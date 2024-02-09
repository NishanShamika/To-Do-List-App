import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { 
    todos: [], 
    filter: 'ALL', 
    search: '', 
    loading: false, 
    error: null
}

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  const data = response.data;
  return data;
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const newId = state.todos.length > 0 ? Math.max(...state.todos.map(todo => todo.id)) + 1 : 1;
      state.todos = [...state.todos, { id: newId, title: action.payload.text, completed: false}];
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
    markCompleted: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.completed = true;
      }
    },
    markIncomplete: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.completed = false;
      }
    },
    filterTodos: (state, action) => {
      state.filter = action.payload.filter;
    },
    updateSearch: (state, action) => {
      state.search = action.payload.search;
    },
    markAllCompleted: (state) => {
      state.todos.forEach(todo => todo.completed = true);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, state => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
        state.error = null;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.todos = [];
        state.error = action.error.message;
      });
  }
});

export const { addTodo, toggleTodo, removeTodo, markCompleted, markIncomplete, filterTodos, updateSearch, markAllCompleted } = todoSlice.actions;
export default todoSlice.reducer;
