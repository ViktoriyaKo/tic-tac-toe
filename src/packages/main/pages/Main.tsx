import { Button, Title, Wrapper } from '@/ui/atoms';
import { Timer } from '@/ui/molecules';

const MainPage = () => {
  return (
    <Wrapper>
      <Title>Tic tac toe</Title>
      <Button>Reset</Button>
      <Timer />
    </Wrapper>
  );
};

export default MainPage;
