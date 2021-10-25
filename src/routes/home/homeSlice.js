import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    books: [],
  },
  reducers: {
    addBooksToHome: (state, action) => {
      state.books.push(...action.payload.books);
    },
    clearBooksHome: (state) => {
      state.books = [];
    },
    setBooksHome: (state, action) => {
      state.books.push(...action.payload.books);
    },
    filter: (state, action) => {
      // mb make more correct filter
      state.books = state.books.filter((b) =>
        b.name.includes(action.payload.q)
      );
    },
  },
});

export const { addBooksToHome, setBooksHome, clearBooksHome } =
  homeSlice.actions;

export default homeSlice.reducer;
