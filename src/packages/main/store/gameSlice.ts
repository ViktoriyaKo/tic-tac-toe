import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { PlayerMark } from '@/constants';

const createBoard = (size: number) => Array(size ** 2).fill(null);

const initialState = {
  size: 3,
  cells: createBoard(3),
  currentPlayer: PlayerMark.CROSS,
  winner: null,
};

export const Slice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    makeMove: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (state.cells[index]) return;
      state.cells[index] = state.currentPlayer;
      state.currentPlayer =
        state.currentPlayer === PlayerMark.CROSS
          ? PlayerMark.ZERO
          : PlayerMark.CROSS;
    },
    resetGame: (state) => {
      state.cells = initialState.cells;
      state.currentPlayer = initialState.currentPlayer;
      state.winner = null;
    },
  },
});

export const { makeMove, resetGame } = Slice.actions;
export const getCells = (store: RootState) => store.game.cells;
export const getCurrentPlayer = (store: RootState) => store.game.currentPlayer;

export default Slice.reducer;
