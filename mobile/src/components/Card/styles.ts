import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 30px 25px 30px 20px;
`;

export const Cover = styled.Image`
  border-radius: 5px;
  width: 100px;
  height: 150px;
  /* err, dropshadow? */
`;

export const Title = styled.Text`
  margin-top: 10px;
  font-weight: 700;
  color: #313131;
  font-size: 12px;
  line-height: 14px;
`;

export const Author = styled.Text`
  margin-top: 5px;
  font-weight: 900;
  font-size: 10px;
  color: #313131;
  line-height: 12px;
`;

export const ImageContainer = styled.TouchableOpacity``;
