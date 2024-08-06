import styled from 'styled-components';

const Title = styled.h1`
  font-size: 5em;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  color: white;
  text-shadow: 4px 4px 6px rgb(0 0 0);

  @media (max-width: 768px) {
    font-size: 3em;
  }
`;

export default Title;
