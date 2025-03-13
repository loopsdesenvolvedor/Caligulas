import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  click: false,
};

const clickSlice = createSlice({
  name: "click",
  initialState,
  reducers: {
    toggleClick: (state) => ({ ...state, click: !state.click }),
  },
});

export const { toggleClick } = clickSlice.actions;

export default clickSlice.reducer;
