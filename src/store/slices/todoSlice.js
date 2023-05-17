import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoText: "",
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    updateText: (state, action) => {
      state.todoText = action.payload;
    },
    loadTodo: (state, action) => {
      state.todoList = action.payload;
    },
    addTodo: (state) => {
      state.todoList = [...state.todoList, state.todoText];
      state.todoText = "";
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter((_, i) => i !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateText, loadTodo, addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
