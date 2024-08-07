import { useDispatch, useSelector } from 'react-redux';
import { Grid } from './BoardStyle';
import {
  checkWinner,
  getCells,
  getCurrentPlayer,
  getStatusGame,
  getWinner,
  makeMove,
  resetGame,
  startGame,
} from '@/store/gameSlice';
import { Button } from '@/ui/atoms';
import Result from '../Result/Result';
import { GameStatus } from '@/constants/GameStatus';
import Cell from '../Сell/Сell';

const Board = () => {
  const cells = useSelector(getCells);
  const currentPlayer = useSelector(getCurrentPlayer);
  const winner = useSelector(getWinner);
  const status = useSelector(getStatusGame);
  const dispatch = useDispatch();
  const handleClick = (index: number) => {
    dispatch(makeMove(index));
    dispatch(checkWinner());
  };

  const renderBoard = () => {
    switch (status) {
      case GameStatus.PLAYING:
        return (
          <>
            <Grid>
              {cells.map((cell, index) => (
                <Cell
                  currentPlayer={currentPlayer}
                  value={cell}
                  key={index}
                  onClick={() => handleClick(index)}
                />
              ))}
            </Grid>
            <Button onClick={() => dispatch(resetGame())}>Reset</Button>
          </>
        );
      case GameStatus.IDLE:
        return (
          <Button align="20%" onClick={() => dispatch(startGame())}>
            Start Game
          </Button>
        );
      default:
        return (
          <>
            <Result winner={winner} status={status} />
            <Button onClick={() => dispatch(resetGame())}>Start again</Button>
          </>
        );
    }
  };

  return renderBoard();
};

export default Board;
