import React from 'react';
import { Image, Container, Input } from './styles';

import icon from '../../assets/Search/search.png';

export interface ISearchProps {
  placeholder: string;
}

const Search: React.FC<ISearchProps> = ({ placeholder }: ISearchProps) => (
  <Container>
    <Image source={icon} width={16} height={16} />
    <Input placeholder={placeholder} />
  </Container>
);

export default Search;
