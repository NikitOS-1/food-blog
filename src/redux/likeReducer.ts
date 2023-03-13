import { createSlice } from "@reduxjs/toolkit";

interface LikeState {
  [id: number]: boolean;
  [id: number]: boolean;
}

const initialState: LikeState = {
  1: true,
};

export const LikeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    addLike: (prevState, action) => ({
      ...prevState,
      [action.payload]: true,
    }),
    removeLike: (prevState, action) => ({
      ...prevState,
      [action.payload]: false,
    }),
  },
});

export const { addLike, removeLike } = LikeSlice.actions;
export default LikeSlice.reducer;
