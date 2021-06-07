import React from 'react';
import { ImageContainer, Author, Container, Cover, Title } from './styles';

export interface BookProps {
  image?: string;
  title: string;
  author: string;
}

const Card: React.FC<BookProps> = ({ image, title, author }) => (
  <Container>
    <ImageContainer style={{ elevation: 10 }}>
      <Cover source={{ uri: image }} />
    </ImageContainer>
    <Title>{title}</Title>
    <Author>by {author}</Author>
  </Container>
);

export default Card;
