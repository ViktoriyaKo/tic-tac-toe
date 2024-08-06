import { Container } from './BoxStyle';

interface IProps {
  value: string;
  onClick: () => void;
}

const Box = (props: IProps) => {
  const { value, onClick } = props;
  return <Container onClick={onClick}>{value}</Container>;
};

export default Box;
