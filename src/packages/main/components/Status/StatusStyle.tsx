import styled from 'styled-components';
import { styles } from '@/styles/variables';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  background: #ffffff73;
  backdrop-filter: blur(2px);
  padding: 12px;
  border-radius: ${styles.borderRadius};
  align-items: center;

  @media (max-width: 768px) {
    gap: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled.p`
  font-size: 70px;
  font-weight: 600;
  color: ${styles.primaryColor};
`;

export const Caption = styled.p`
  text-transform: uppercase;
  color: white;
  font-weight: 700;
  text-shadow: 1px 1px 1px black;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
