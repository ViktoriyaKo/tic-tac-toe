import { DRAW } from '@/constants/Players';
import { Container, Title } from './ResultStyle';

interface IProps {
  winner: string;
}

const Result = (props: IProps) => {
  const { winner } = props;
  const title =
    winner && winner === DRAW
      ? `You have a draw! \n Try again🙏`
      : `Congratulations! \n ${winner} won 🏆`;

  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default Result;
