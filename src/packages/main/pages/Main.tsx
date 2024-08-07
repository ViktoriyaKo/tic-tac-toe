import { Container, Title, Wrapper } from '@/ui/atoms';
import { Board, Status } from '../components';
import { Players } from '@/constants';

const MainPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Tic tac toe</Title>
        <Status players={Players} />
        <Board />
      </Wrapper>
    </Container>
  );
};

export default MainPage;
