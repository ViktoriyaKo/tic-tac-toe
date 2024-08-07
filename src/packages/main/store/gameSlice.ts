import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { PlayerMark, Players, WinningCase } from '@/constants';
import { DRAW } from '@/constants/Players';

const createBoard = (size: number) => Array(size ** 2).fill(null);

interface GameState {
  isRunning: boolean;
  timer: number;
  size: number;
  cells: (PlayerMark | null)[];
  currentPlayer: PlayerMark;
  winner: string | null;
}

const initialState: GameState = {
  isRunning: false,
  timer: 0,
  size: 3,
  cells: createBoard(3),
  currentPlayer: PlayerMark.CROSS,
  winner: null,
};

export const Slice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (state) => {
      state.isRunning = true;
    },
    makeMove: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (state.cells[index] || state.winner) return;
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
      state.isRunning = initialState.isRunning;
    },
    checkWinner: (state) => {
      for (let i = 0; i < WinningCase.length; i++) {
        const [value1, value2, value3] = WinningCase[i];
        if (
          state.cells[value1] &&
          state.cells[value1] === state.cells[value2] &&
          state.cells[value1] === state.cells[value3]
        ) {
          state.winner =
            state.cells[value1] === PlayerMark.CROSS
              ? Players[0].name
              : Players[1].name;
          return;
        }
      }
      const isDraw = state.cells.every((cell) => cell !== null);
      if (isDraw) {
        state.winner = DRAW;
        return;
      }
    },
  },
});

export const { startGame, makeMove, checkWinner, resetGame } = Slice.actions;
export const getCells = (store: RootState) => store.game.cells;
export const getCurrentPlayer = (store: RootState) => store.game.currentPlayer;
export const getWinner = (store: RootState) => store.game.winner;

export default Slice.reducer;
