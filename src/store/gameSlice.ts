import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { PlayerMark, Players, WinningCase, GameStatus } from '../constants';

const createBoard = (size: number) => Array(size ** 2).fill(null);

export interface GameState {
  size: number;
  cells: (PlayerMark | null)[];
  currentPlayer: PlayerMark;
  status: GameStatus;
  winner: string | null;
}

const initialState: GameState = {
  size: 3,
  cells: createBoard(3),
  currentPlayer: PlayerMark.CROSS,
  status: GameStatus.IDLE,
  winner: null,
};

export const Slice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (state) => {
      state.cells = createBoard(state.size);
      state.currentPlayer = PlayerMark.CROSS;
      state.status = GameStatus.PLAYING;
      state.winner = null;
    },
    makeMove: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (state.cells[index]) return;
      state.cells[index] = state.currentPlayer;
      state.status = GameStatus.PLAYING;
      state.currentPlayer =
        state.currentPlayer === PlayerMark.CROSS
          ? PlayerMark.ZERO
          : PlayerMark.CROSS;
    },
    resetGame: (state) => {
      state.cells = initialState.cells;
      state.currentPlayer = initialState.currentPlayer;
      //status PLAYING not IDLE specially:
      state.status = GameStatus.PLAYING;
      state.winner = null;
    },
    checkWinner: (state) => {
      for (let i = 0; i < WinningCase.length; i++) {
        const [value1, value2, value3] = WinningCase[i];
        if (
          state.cells[value1] &&
          state.cells[value1] === state.cells[value2] &&
          state.cells[value1] === state.cells[value3]
        ) {
          state.status = GameStatus.WON;
          state.winner =
            state.cells[value1] === PlayerMark.CROSS
              ? Players[0].name
              : Players[1].name;
          return;
        }
      }
      const isDraw = state.cells.every((cell) => cell !== null);
      if (isDraw) {
        state.status = GameStatus.DRAW;
        return;
      }
    },
  },
});

export const { startGame, makeMove, checkWinner, resetGame } = Slice.actions;
export const getCells = (store: RootState) => store.game.cells;
export const getCurrentPlayer = (store: RootState) => store.game.currentPlayer;
export const getWinner = (store: RootState) => store.game.winner;
export const getStatusGame = (store: RootState) => store.game.status;

export default Slice.reducer;
