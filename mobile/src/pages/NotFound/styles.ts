import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.background};
`;

export const Title = styled.Text`
  font-size: 36px;
  font-weight: 900;
  color: ${({ theme }) => theme.color.primary};
`;

export const Text = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.color.text};
`;
