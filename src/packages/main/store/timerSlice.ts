import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  timer: 0,
  isRunning: false,
};

export const Slice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    reducers: {
      startTimer: (state) => {
        state.isRunning = true;
      },
      tick: (state) => {
        if (state.isRunning) {
          state.timer += 1;
        }
      },
      resetTimer: (state) => {
        state.timer = 0;
        state.isRunning = false;
      },
    },
  },
});

export const { startTimer, tick, resetTimer } = Slice.actions;

export default Slice.reducer;
