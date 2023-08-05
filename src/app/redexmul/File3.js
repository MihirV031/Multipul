import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const File3 = createSlice({
  name: 'count3',
  initialState,
  reducers: {
    incrementvalue: (state) => {
      state.value += 15;
    },
    decrementvalue: (state) => {
      state.value -= 15;
    },
    incrementnum: (state, action) => {
        state.value += action.payload;
      },
  },
});

export const { incrementvalue, decrementvalue,incrementnum } = File3.actions;

export default File3.reducer;
