import { styles } from '@/styles/variables';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${styles.spacing};
  max-width: ${styles.widthContainer};
  width: 100%;
  margin: 0 auto;
  height: 100%;
`;

export default Wrapper;
