import { createSlice } from "@reduxjs/toolkit";

interface CounterState {}

const initialState: CounterState = {};

export const isLikeSlice = createSlice({
  name: "isLike",
  initialState,
  reducers: {},
});

export const {} = isLikeSlice.actions;
export default isLikeSlice.reducer;
