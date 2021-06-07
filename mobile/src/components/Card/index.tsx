import React from 'react';
import { ImageContainer, Author, Container, Cover, Title } from './styles';

export interface BookProps {
  id?: string;
  title: string;
  author: string;
  image?: string;
}

const Card: React.FC<BookProps> = ({ image, title, author }) => (
  <Container>
    <ImageContainer
      style={{
        shadowColor: 'rgba(212, 173, 134, 0.4926)',
        shadowOffset: {
          width: 5,
          height: 5,
        },
        shadowOpacity: 0.4926,
        shadowRadius: 10,

        elevation: 3,
      }}
    >
      <Cover source={{ uri: image }} />
    </ImageContainer>
    <Title>{title}</Title>
    <Author>by {author}</Author>
  </Container>
);

export default Card;
