import styled from 'styled-components';

export const MovieGridContainer = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(420px, 420px));
  justify-content: center;
  align-items: center;
  font-family: Roboto Helvetica Arial sans-serif;
  font-weight: 300;
  font-size: 1.05rem;
`;
