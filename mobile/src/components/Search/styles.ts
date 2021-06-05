import styled from 'styled-components/native';

const Container = styled.View`
  height: 48px;
  width: 90%;
  margin-top: 50px;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.color.input};
  border-radius: 10px;
  flex-direction: row;
  elevation: 1;
`;

const Image = styled.Image`
  height: 16px;
  width: 16px;
  align-self: center;
  margin: 20px
  margin-right: 10px;
`;

const Input = styled.TextInput`
  width: 100%;
  color: ${({ theme }) => theme.color.inputText};
`;

export { Container, Image, Input };
