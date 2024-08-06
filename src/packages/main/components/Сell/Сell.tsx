import { PlayerMark } from '@/constants';
import { Icon } from '../Status/StatusStyle';
import { Container } from './СellStyle';
import cross from '/icons/cross.png';
import zero from '/icons/zero.png';

interface IProps {
  value: string | null;
  currentPlayer: string;
  onClick: () => void;
}

const Cell = (props: IProps) => {
  const { value, onClick, currentPlayer } = props;
  const showContent = value === null || value === currentPlayer;

  const icon =
    value === PlayerMark.CROSS
      ? cross
      : value === PlayerMark.ZERO
      ? zero
      : null;

  return (
    <Container content={showContent ? currentPlayer : ''} onClick={onClick}>
      {value}
    </Container>
  );
};

export default Cell;
