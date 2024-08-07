// test for components:

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { GameStatus } from '@/constants/GameStatus';
import { Board } from '@/packages/main/components';
import { PlayerMark } from '@/constants';
import gameReducer, { GameState } from '../store/gameSlice';

const renderWithState = (initialState: GameState) => {
  const store = configureStore({
    reducer: {
      game: gameReducer,
    },
    preloadedState: {
      game: initialState,
    },
  });

  return render(
    <Provider store={store}>
      <Board />
    </Provider>
  );
};

describe('Board Component', () => {
  it('should render start button when status game is IDLE', () => {
    const initialState = {
      size: 3,
      cells: Array(9).fill(null),
      currentPlayer: PlayerMark.CROSS,
      winner: null,
      status: GameStatus.IDLE,
    };

    renderWithState(initialState);

    const button = screen.getByText('Start Game');
    expect(button).toBeInTheDocument();
  });

  it('should render board and reset button when status game is PLAYING', () => {
    const initialState = {
      size: 3,
      cells: [PlayerMark.CROSS, ...Array(8).fill(null)],
      currentPlayer: PlayerMark.CROSS,
      winner: null,
      status: GameStatus.PLAYING,
    };

    renderWithState(initialState);

    const button = screen.getByText('Reset');
    const cells = screen.getAllByTestId('cell-container');
    expect(cells).toHaveLength(9);
    expect(button).toBeInTheDocument();
  });

  it('should render result when status game is DRAW', () => {
    const initialState = {
      size: 3,
      cells: [PlayerMark.CROSS, ...Array(8).fill(null)],
      currentPlayer: PlayerMark.CROSS,
      winner: null,
      status: GameStatus.DRAW,
    };

    renderWithState(initialState);

    const button = screen.getByText('Start again');
    expect(button).toBeInTheDocument();
  });
});
