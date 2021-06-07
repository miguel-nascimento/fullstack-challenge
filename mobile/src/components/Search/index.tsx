import React from 'react';
import { Image, Container, Input, Bar } from './styles';

import icon from '../../assets/Search/search.png';
import { TextInputProps } from 'react-native';

export interface SearchProps extends TextInputProps {
  placeholder: string;
}

const Search: React.FC<SearchProps> = ({
  placeholder,
  onSubmitEditing,
}: SearchProps) => (
  <Container>
    <Bar>
      <Image source={icon} width={16} height={16} />
      <Input
        onSubmitEditing={onSubmitEditing}
        returnKeyType="search"
        placeholder={placeholder}
      />
    </Bar>
  </Container>
);

export default Search;
