import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    books: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((b) => b.id !== action.payload.id);
    },
    clearBooks: (state) => {
      state.books = [];
    },
  },
});

export const { addBook, removeBook, clearBooks } = basketSlice.actions;

export default basketSlice.reducer;
