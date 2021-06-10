import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
`;
export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.background};
`;

export const Background = styled.ImageBackground`
  width: 100%;
  height: 315px;
`;

export const Content = styled.View`
  margin-top: 65px;
`;

export const ImageSection = styled.View`
  padding-top: 30px;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.View`
  overflow: visible;
  border-radius: 10px;
`;

export const Image = styled.Image`
  width: 150px;
  height: 235px;
  border-radius: 10px;
`;
export const Body = styled.View`
  margin-top: 87px;
  padding: 0 20px;
  height: 100%;
`;

export const TitleSubtitle = styled.Text`
  font-size: 24px;
  line-height: 28.64px;
  font-weight: 400;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const Author = styled.Text`
  margin-top: 7px;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.color.primary};
`;

export const Description = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  line-height: 25px;
  color: rgba(49, 49, 49, 0.6);
`;

export const Back = styled.View`
  margin-left: 20px;
`;

export const Floating = styled.View`
  position: absolute;
  justify-content: center;
  align-self: center;
  align-items: center;
  flex-direction: row;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.color.white};
  height: 56px;
  width: 100%;
`;
export const Item = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Label = styled.Text`
  color: ${({ theme }) => theme.color.fontFloating};
  font-weight: 700;
  font-size: 14px;
  line-height: 16.71px;
  padding-left: 10px;
`;
export const Divider = styled.View`
  height: 20px;
  width: 2px;
  border-radius: 1px;
  background-color: ${({ theme }) => theme.color.iconFloating};
`;
