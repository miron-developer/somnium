import { createSlice } from "@reduxjs/toolkit";

export const popupSlice = createSlice({
  name: "popup",
  initialState: {
    active: {},
    popups: [],
  },
  reducers: {
    openPopup: (state, action) => {
      const cur = action.payload;
      if (Object.values(state.active).length > 0)
        state.popups.push(state.active);
      state.active = cur;
    },
    goBack: (state) => {
      state.active = state.popups.pop();
    },
    clearPopups: (state) => {
      state.popups = [];
      state.active = {};
    },
  },
});

export const { openPopup, goBack, clearPopups } = popupSlice.actions;

export default popupSlice.reducer;
