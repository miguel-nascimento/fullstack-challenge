import React from 'react';
import { FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import Card, { BookProps } from '../../components/Card';
import Hello from '../../components/Hello';
import Search from '../../components/Search';

import { Container } from './styles';

const Home: React.FC = () => {
  const dataList = [
    {
      key: String(Math.random()),
      author: 'Gary Keller',
      title: 'The One Thing',
      image:
        'https://books.google.com.br/books/content?id=94ScMQEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE731QJgYtWNccoYSzzJRFODBQJ1wUeas834HrotPjnuRWs-UNDviqxS8cGkoJuxRccNinIeQknm1ZSN61e-ATmF0FYIWqLT1fsjVLFrAT1LOW4Oww_EPJtl1sN4jwXl-0TKtNBbE',
    },
    {
      key: String(Math.random()),
      author: 'Nir Eyal',
      title: 'Hooked',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81fcWvYdukL.jpg',
    },
    {
      key: String(Math.random()),
      author: 'Jim Collins',
      title: 'Good to Great',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81cOrVseOYL.jpg',
    },
    {
      key: String(Math.random()),
      author: 'Gary Keller',
      title: 'The One Thing',
      image:
        'https://books.google.com.br/books/content?id=94ScMQEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE731QJgYtWNccoYSzzJRFODBQJ1wUeas834HrotPjnuRWs-UNDviqxS8cGkoJuxRccNinIeQknm1ZSN61e-ATmF0FYIWqLT1fsjVLFrAT1LOW4Oww_EPJtl1sN4jwXl-0TKtNBbE',
    },
    {
      key: String(Math.random()),
      author: 'Nir Eyal',
      title: 'Hooked',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81fcWvYdukL.jpg',
    },
    {
      key: String(Math.random()),
      author: 'Jim Collins',
      title: 'Good to Great',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81cOrVseOYL.jpg',
    },
    {
      key: String(Math.random()),
      author: 'Gary Keller',
      title: 'The One Thing',
      image:
        'https://books.google.com.br/books/content?id=94ScMQEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE731QJgYtWNccoYSzzJRFODBQJ1wUeas834HrotPjnuRWs-UNDviqxS8cGkoJuxRccNinIeQknm1ZSN61e-ATmF0FYIWqLT1fsjVLFrAT1LOW4Oww_EPJtl1sN4jwXl-0TKtNBbE',
    },
    {
      key: String(Math.random()),
      author: 'Nir Eyal',
      title: 'Hooked',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81fcWvYdukL.jpg',
    },
  ];

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <Search
          onSubmitEditing={() => console.log('Enviado')}
          placeholder="Search book"
        />
        <Hello name="Mehmed Al Fatih" />
        <FlatList<BookProps>
          data={dataList}
          numColumns={3}
          onRefresh={() => {}}
          refreshing={false}
          renderItem={({ item }) => (
            <Card image={item.image} author={item.author} title={item.title} />
          )}
        />
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Home;
