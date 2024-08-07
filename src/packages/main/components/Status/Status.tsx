import { Caption, Container, Wrapper, Icon } from './StatusStyle';

interface IProps {
  players: { name: string; icon: string }[];
}

const Status = (props: IProps) => {
  const { players } = props;

  return (
    <Container>
      {players.map((player) => {
        const { name, icon } = player;
        return (
          <Wrapper key={name}>
            <Icon>{icon}</Icon>
            <Caption>{name}</Caption>
          </Wrapper>
        );
      })}
    </Container>
  );
};

export default Status;
