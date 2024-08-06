import styled from 'styled-components';

export const Grid = styled.div`
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  max-width: 500px;
  width: 100%;
  gap: 12px;
  display: grid;
  margin: 0 auto;
`;
