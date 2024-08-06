import Box from '../Box/Box';
import { Grid } from './BoardStyle';

interface IProps {
  size?: number;
}

const Board = (props: IProps) => {
  const { size = 3 } = props;
  return (
    <Grid>
      {Array.from({ length: size ** 2 }, (_, index) => index).map((item) => {
        return <Box value="X" key={item} />;
      })}
    </Grid>
  );
};

export default Board;
