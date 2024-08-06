import { Timer } from '@/ui/molecules';
import { Caption, Container, Icon, Wrapper } from './StatusStyle';

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
            <Icon src={icon} />
            <Caption>{name}</Caption>
          </Wrapper>
        );
      })}
      <Timer />
    </Container>
  );
};

export default Status;
