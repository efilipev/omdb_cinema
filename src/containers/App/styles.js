import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  width: ${(props) => props.width || null};
  margin-left: ${(props) => props.ml || null};
  align-self: ${(props) => props.alignSelf || null};
  margin-top: ${(props) => props.mt || null};
`;
