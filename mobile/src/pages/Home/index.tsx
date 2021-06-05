import React from 'react';
import { FlatList } from 'react-native';
import Card, { IBookProps } from '../../components/Card';
import Hello from '../../components/Hello';
import Search from '../../components/Search';

import { Container } from './styles';

const Home: React.FC = () => {
  const dataList: IBookProps[] = [
    {
      author: 'Gary Keller',
      title: 'The One Thing',
      image:
        'https://books.google.com.br/books/content?id=94ScMQEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE731QJgYtWNccoYSzzJRFODBQJ1wUeas834HrotPjnuRWs-UNDviqxS8cGkoJuxRccNinIeQknm1ZSN61e-ATmF0FYIWqLT1fsjVLFrAT1LOW4Oww_EPJtl1sN4jwXl-0TKtNBbE',
    },
    {
      author: 'Nir Eyal',
      title: 'Hooked',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81fcWvYdukL.jpg',
    },
    {
      author: 'Jim Collins',
      title: 'Good to Great',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81cOrVseOYL.jpg',
    },
    {
      author: 'Gary Keller',
      title: 'The One Thing',
      image:
        'https://books.google.com.br/books/content?id=94ScMQEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE731QJgYtWNccoYSzzJRFODBQJ1wUeas834HrotPjnuRWs-UNDviqxS8cGkoJuxRccNinIeQknm1ZSN61e-ATmF0FYIWqLT1fsjVLFrAT1LOW4Oww_EPJtl1sN4jwXl-0TKtNBbE',
    },
    {
      author: 'Nir Eyal',
      title: 'Hooked',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81fcWvYdukL.jpg',
    },
    {
      author: 'Jim Collins',
      title: 'Good to Great',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81cOrVseOYL.jpg',
    },
    {
      author: 'Gary Keller',
      title: 'The One Thing',
      image:
        'https://books.google.com.br/books/content?id=94ScMQEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE731QJgYtWNccoYSzzJRFODBQJ1wUeas834HrotPjnuRWs-UNDviqxS8cGkoJuxRccNinIeQknm1ZSN61e-ATmF0FYIWqLT1fsjVLFrAT1LOW4Oww_EPJtl1sN4jwXl-0TKtNBbE',
    },
    {
      author: 'Nir Eyal',
      title: 'Hooked',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81fcWvYdukL.jpg',
    },
  ];

  return (
    <Container>
      <Search placeholder="Search book" />
      <Hello name="Mehmed Al Fatih" />
      <FlatList<IBookProps>
        data={dataList}
        numColumns={3}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) => (
          <Card image={item.image} author={item.author} title={item.title} />
        )}
      />
    </Container>
  );
};

export default Home;
