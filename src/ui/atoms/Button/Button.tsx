import { theme } from '@/styles/variables';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  padding: 8px 12px;
  background-color: white;
  color: ${theme.primaryColor};
  border-radius: ${theme.borderRadius};
  transition: all 0.3s;

  &:hover {
    background-color: ${theme.primaryColor};
    color: white;
    transition: all 0.3s;
  }
`;

export default Button;
