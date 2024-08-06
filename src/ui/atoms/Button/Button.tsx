import { styles } from '@/styles/variables';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  padding: 8px 12px;
  background-color: white;
  color: ${styles.primaryColor};
  border-radius: ${styles.borderRadius};
  transition: all 0.3s;

  &:hover {
    background-color: ${styles.primaryColor};
    color: white;
    transition: all 0.3s;
  }
`;

export default Button;
