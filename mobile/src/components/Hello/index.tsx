import React from 'react';

import { Container, Title, Name } from './styles';

export interface HelloProps {
  name: string;
}

const Hello: React.FC<HelloProps> = ({ name }) => (
  <Container>
    <Title>
      Hi, <Name>{name}</Name> 👋
    </Title>
  </Container>
);

export default Hello;
