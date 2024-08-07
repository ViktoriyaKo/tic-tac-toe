import { useDispatch, useSelector } from 'react-redux';
import Cell from '../Сell/Сell';
import { Grid } from './BoardStyle';
import {
  checkWinner,
  getCells,
  getCurrentPlayer,
  getWinner,
  makeMove,
  resetGame,
  startGame,
} from '../../store/gameSlice';
import { Button } from '@/ui/atoms';
import Result from '../Result/Result';

const Board = () => {
  const cells = useSelector(getCells);
  const currentPlayer = useSelector(getCurrentPlayer);
  const winner = useSelector(getWinner);
  const dispatch = useDispatch();

  const handleClick = (index: number) => {
    dispatch(makeMove(index));
    dispatch(checkWinner());
  };

  return !winner ? (
    <>
      <Grid>
        {cells.map((cell, index) => {
          return (
            <Cell
              currentPlayer={currentPlayer}
              value={cell}
              key={index}
              onClick={() => handleClick(index)}
            />
          );
        })}
      </Grid>
      <Button onClick={() => dispatch(resetGame())}>Reset</Button>
    </>
  ) : (
    <>
      <Result winner={winner} />
      <Button
        onClick={() => {
          dispatch(resetGame());
          dispatch(startGame());
        }}
      >
        Start again
      </Button>
    </>
  );

  // <Button onClick={() => dispatch(startGame())}>Start</Button>
};

export default Board;
