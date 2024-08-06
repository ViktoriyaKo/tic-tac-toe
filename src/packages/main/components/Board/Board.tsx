import { useDispatch, useSelector } from 'react-redux';
import Cell from '../Сell/Сell';
import { Grid } from './BoardStyle';
import { getCells, getCurrentPlayer, makeMove } from '../../store/gameSlice';

const Board = () => {
  const cells = useSelector(getCells);
  const currentPlayer = useSelector(getCurrentPlayer);
  const dispatch = useDispatch();

  const handleClick = (index: number) => {
    dispatch(makeMove(index));
  };

  return (
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
  );
};

export default Board;
