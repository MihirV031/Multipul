import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const plus1Slice = createSlice({
  name: 'plus1',
  initialState,
  reducers: {
    incrementnum: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { incrementnum } = plus1Slice.actions;

export default plus1Slice.reducer;
