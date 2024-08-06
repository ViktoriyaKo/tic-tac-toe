import { Button, Container, Title, Wrapper } from '@/ui/atoms';
import { Board, Status } from '../components';
import cross from '/icons/cross.png';
import zero from '/icons/zero.png';

const MainPage = () => {
  const players = [
    { name: 'Player #1', icon: cross },
    { name: 'Player #2', icon: zero },
  ];

  return (
    <Container>
      <Wrapper>
        <Title>Tic tac toe</Title>
        <Status players={players} />
        <Board />
        <Button>Reset</Button>
      </Wrapper>
    </Container>
  );
};

export default MainPage;
