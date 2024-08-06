import { styles } from '@/styles/variables';
import styled from 'styled-components';

const Container = styled.section`
  background-image: url('/images/background.webp');
  padding: ${styles.spacing};
  background-size: cover;
  height: 100vh;
  background-position: center;
`;

export default Container;
