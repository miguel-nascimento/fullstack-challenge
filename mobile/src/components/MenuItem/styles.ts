import styled from 'styled-components/native';

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const Label = styled.Text<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 12px;
`;
export { Container, Label };
