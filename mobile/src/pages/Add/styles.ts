import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Controller } from 'react-hook-form';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.background};
`;

export const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

export const AddButtonText = styled.Text`
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  color: ${({ theme }) => theme.color.white};
`;

export const Button = styled(RectButton)`
  align-self: center;
  height: 48px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 38px;
`;

export const Header = styled.View`
  margin-top: 53px;
  margin-bottom: 60px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.color.formText};
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 10px;
`;

export const HeaderText = styled.Text`
  padding-left: 27px;
  font-size: 24px;
  font-weight: bold;
  line-height: 28.64px;
  color: ${({ theme }) => theme.color.primary};
`;

export const Body = styled.View`
  padding: 0 20px;
  justify-content: center;
`;

export const PickerContainer = styled.View`
  flex: 1;
  margin-bottom: 38px;
`;

export const Picker = styled.TouchableOpacity`
  flex: 1;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  border: 2px dashed rgba(254, 106, 120, 0.8);
  border-radius: 4px;
  width: 115px;
  height: 150px;
  background-color: rgba(254, 106, 120, 0.1);
`;

export const CoverPicker = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const CoverContainer = styled.View``;

export const Cover = styled.Image`
  width: 115px;
  height: 150px;
  border-radius: 10px;
`;
