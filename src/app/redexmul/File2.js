import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const File2 = createSlice({
  name: 'counter1',
  initialState,
  reducers: {
    increment1: (state) => {
      state.value += 10;
    },
    decrement1: (state) => {
      state.value -= 10;
    },
    incrementnum: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment1, decrement1, incrementnum } = File2.actions;

export default File2.reducer;
