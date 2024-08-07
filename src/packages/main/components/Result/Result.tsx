import { GameStatus } from '@/constants/GameStatus';
import { Container, Title } from './ResultStyle';

interface IProps {
  winner: string | null;
  status: string;
}

const Result = (props: IProps) => {
  const { winner, status } = props;
  const title =
    status === GameStatus.DRAW
      ? `You have a draw! \n Try again🙏`
      : `Congratulations! \n ${winner} won 🏆`;

  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default Result;
