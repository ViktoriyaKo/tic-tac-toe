import { styles } from '@/styles/variables';
import styled from 'styled-components';

interface IButton {
  align?: string;
}

const Button = styled.button<IButton>`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  padding: 12px;
  background-color: white;
  color: ${styles.primaryColor};
  border-radius: ${styles.borderRadius};
  transition: all 0.3s;
  max-width: 200px;
  width: 100%;
  align-self: center;
  margin-top: ${(props) => (props.align ? props.align : 0)};

  &:hover {
    background-color: ${styles.primaryColor};
    color: white;
    transition: all 0.3s;
  }
`;

export default Button;
