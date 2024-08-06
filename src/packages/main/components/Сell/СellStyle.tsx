import { styles } from '@/styles/variables';
import styled from 'styled-components';

interface ContainerProps {
  content: string;
  onClick?: () => void;
}

export const Container = styled.div<ContainerProps>`
  background-color: #ffffffdb;
  aspect-ratio: 1 / 1;
  color: ${styles.primaryColor};
  width: 100%;
  height: 100%;
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-size: 60px;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;

  &:hover {
    background-color: ${styles.primaryColor};
    color: white;
    transition: all 0.3s;
  }

  &:hover::after {
    content: ${(props) => `"${props.content}"` || ''};
    position: absolute;
    opacity: 0.3;
  }
`;
