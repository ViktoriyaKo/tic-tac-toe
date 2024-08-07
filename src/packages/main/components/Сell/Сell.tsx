import { Container } from './СellStyle';

interface IProps {
  value: string | null;
  currentPlayer: string;
  onClick: () => void;
}

const Cell = (props: IProps) => {
  const { value, onClick, currentPlayer } = props;
  const showContent = value === null || value === currentPlayer;

  return (
    <Container content={showContent ? currentPlayer : ''} onClick={onClick}>
      {value}
    </Container>
  );
};

export default Cell;
