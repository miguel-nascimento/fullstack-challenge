import React from 'react';
import { FlatList } from 'react-native';
import Card, { IBookProps } from '../../components/Card';
import Hello from '../../components/Hello';

import { Container } from './styles';

const Home: React.FC = () => {
  const dataList: IBookProps[] = [
    {
      author: 'Gary Keller',
      title: 'The One Thing',
      image: 'https://picsum.photos/id/1/200/300',
    },
    {
      author: 'Gary Keller',
      title: 'The One Thing',
      image: 'https://picsum.photos/id/1/200/300',
    },
    {
      author: 'Gary Keller',
      title: 'The One Thing',
      image: 'https://picsum.photos/id/1/200/300',
    },
    {
      author: 'Gary Keller',
      title: 'The One Thing',
      image: 'https://picsum.photos/id/1/200/300',
    },
    {
      author: 'Gary Keller',
      title: 'The One Thing',
      image: 'https://picsum.photos/id/1/200/300',
    },
  ];

  return (
    <Container>
      {/* <Search /> */}
      <Hello name="Mehmed Al Fatih" />
      <FlatList<IBookProps>
        data={dataList}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card image={item.image} author={item.author} title={item.title} />
        )}
      />
    </Container>
  );
};

export default Home;
