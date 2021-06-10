import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 30px 25px 30px 20px;
  flex-shrink: 1;
  border-radius: 5px;
`;

export const Cover = styled.Image`
  border-radius: 5px;
  width: 100px;
  height: 150px;
`;

export const Title = styled.Text`
  margin-top: 10px;
  font-weight: 700;
  color: #313131;
  font-size: 12px;
  line-height: 14px;
  flex-shrink: 1;
`;

export const Author = styled.Text`
  margin-top: 5px;
  font-weight: 900;
  font-size: 10px;
  color: #313131;
  line-height: 12px;
  flex-shrink: 1;
`;

export const ImageContainer = styled.TouchableOpacity``;
