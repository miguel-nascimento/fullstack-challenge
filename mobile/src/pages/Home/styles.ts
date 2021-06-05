import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.background};
  justify-content: space-around;
  align-items: center;
`;

export { Container };
