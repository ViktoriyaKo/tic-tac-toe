import { styles } from '@/styles/variables';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  padding: 12px ${styles.spacing};
  font-weight: 700;
  font-size: 40px;
  width: max-content;
  border-radius: ${styles.borderRadius};
  color: ${styles.primaryColor};
  text-shadow: 2px 2px 2px rgb(0 0 0);

  @media (max-width: 768px) {
    font-size: 20px;
    text-shadow: none;
    padding: 8px;
  }
`;
