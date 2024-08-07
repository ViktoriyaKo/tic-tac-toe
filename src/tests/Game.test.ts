// test State Machine и Game Logic:

import { configureStore } from '@reduxjs/toolkit';
import gameReducer, {
  startGame,
  makeMove,
  checkWinner,
  resetGame,
} from '../store/gameSlice';
import { GameStatus, PlayerMark, Players } from '../constants';

const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

describe('gameSlice', () => {
  it('should initialize with the correct state', () => {
    const state = store.getState().game;
    expect(state.cells).toHaveLength(9);
    expect(state.currentPlayer).toBe(PlayerMark.CROSS);
    expect(state.status).toBe(GameStatus.IDLE);
    expect(state.winner).toBeNull();
  });

  it('should start the game correctly', () => {
    store.dispatch(startGame());
    const state = store.getState().game;
    expect(state.status).toBe(GameStatus.PLAYING);
    expect(state.currentPlayer).toBe(PlayerMark.CROSS);
    expect(state.cells.every((cell) => cell === null)).toBe(true);
  });

  it('should handle making a move', () => {
    store.dispatch(startGame());
    store.dispatch(makeMove(0));
    const state = store.getState().game;
    expect(state.cells[0]).toBe(PlayerMark.CROSS);
    expect(state.currentPlayer).toBe(PlayerMark.ZERO);
  });

  it('should detect a winner', () => {
    store.dispatch(startGame());
    store.dispatch(makeMove(0));
    store.dispatch(makeMove(1));
    store.dispatch(makeMove(3));
    store.dispatch(makeMove(4));
    store.dispatch(makeMove(6));
    store.dispatch(checkWinner());
    const state = store.getState().game;
    expect(state.status).toBe(GameStatus.WON);
    expect(state.winner).toBe(Players[0].name);
  });

  it('should detect a draw', () => {
    store.dispatch(startGame());
    [0, 1, 2, 3, 5, 6, 7, 8, 4].forEach((index) =>
      store.dispatch(makeMove(index))
    );
    store.dispatch(checkWinner());
    const state = store.getState().game;
    expect(state.status).toBe(GameStatus.DRAW);
    expect(state.winner).toBe(null);
  });

  it('should reset the game', () => {
    store.dispatch(startGame());
    store.dispatch(makeMove(0));
    store.dispatch(resetGame());
    const state = store.getState().game;
    expect(state.status).toBe(GameStatus.PLAYING);
    expect(state.currentPlayer).toBe(PlayerMark.CROSS);
    expect(state.cells.every((cell) => cell === null)).toBe(true);
    expect(state.winner).toBeNull();
  });
});
