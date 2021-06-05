import styled from 'styled-components/native';

const Container = styled.View`
  width: 90%;
  margin-bottom: 36px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.color.title}; ;
`;

const Name = styled.Text`
  color: ${({ theme }) => theme.color.primary};
  font-weight: 600;
`;
export { Container, Title, Name };
