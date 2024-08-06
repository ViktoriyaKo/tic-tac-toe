import { styles } from '@/styles/variables';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffffffdb;
  aspect-ratio: 1 / 1;
  color: ${styles.primaryColor};
  width: 100%;
  height: 100%;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${styles.primaryColor};
    color: white;
    transition: all 0.3s;
  }
`;
