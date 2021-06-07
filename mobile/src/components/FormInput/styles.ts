import styled from 'styled-components/native';

export interface Props {
  multiline?: boolean;
}

export const Container = styled.View<Props>`
  flex: 1;
  margin-bottom: 38px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.color.formText};
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 10px;
`;

export const InputContainer = styled.View<Props>`
  flex: 1;
  height: ${(props) => (props.multiline ? '200px' : '48px')};
  background-color: ${({ theme }) => theme.color.input};
  border-radius: 10px;
  padding: 0px 10px;
`;

export const Input = styled.TextInput<Props>`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 5px;
`;

export const ErrorText = styled.Text`
  margin: 10px 0;
  color: ${({ theme }) => theme.color.primary};
  font-size: 14px;
  font-weight: bold;
`;
