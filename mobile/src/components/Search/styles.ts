import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  margin: 50px 20px 30px;
`;

export const Image = styled.Image`
  height: 16px;
  width: 16px;
  align-self: center;
  margin: 20px;
  margin-right: 10px;
`;

export const Input = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.color.inputText};
  margin-right: 10px;
`;

export const Bar = styled.View`
  flex: 1;
  flex-direction: row;
  height: 48px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.input};
  elevation: 1;
`;
