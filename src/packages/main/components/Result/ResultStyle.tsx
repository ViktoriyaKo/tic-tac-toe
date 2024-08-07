import { styles } from '@/styles/variables';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffffffdb;
  width: 100%;
  height: 50%;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Title = styled.h2`
  font-size: 40px;
  white-space: pre-line;
  color: ${styles.primaryColor};
  text-align: center;
`;
