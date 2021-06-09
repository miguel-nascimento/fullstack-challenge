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

export const ImageContainer = styled.View`
  padding-top: 145px;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 150px;
  height: 200px;
  border-radius: 10px;
`;
export const Body = styled.View``;

export const TitleSubtitle = styled.Text`
  font-size: 24px;
  line-height: 28.64px;
  font-weight: 400;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const Author = styled.Text`
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.color.primary};
`;

export const Description = styled.Text`
  font-size: 14px;
  line-height: 25px;
  color: rgba(49, 49, 49, 0.6);
`;

export const Back = styled.View`
  position: absolute;
  right: 100px;
`;
