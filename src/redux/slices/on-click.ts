import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  menuOpen: false,
};

const clickSlice = createSlice({
  name: "click",
  initialState,
  reducers: {
    toggleClick: (state) => {
      state.menuOpen = !state.menuOpen;
    },
  },
});

export const { toggleClick } = clickSlice.actions;

export default clickSlice.reducer;
