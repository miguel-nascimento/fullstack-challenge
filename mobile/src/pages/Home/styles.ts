import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.background};
`;

export const Button = styled(RectButton)`
  align-self: center;
  height: 48px;
  width: 50%;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 38px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: 600;
`;

export const LoadMore = styled.View`
  padding: 30px 20px;
`;
