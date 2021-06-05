import { Feather } from '@expo/vector-icons';
import React from 'react';

import { Container, Label } from './styles';

export interface IMenuItemProps {
  focused?: boolean;
  title: string;
  iconName: 'home' | 'plus' | 'user' | undefined;
}

const MenuItem: React.FC<IMenuItemProps> = ({ focused, title, iconName }) => {
  const itemColor = focused ? '#000' : '#BFBEBF';
  return (
    <Container>
      <Feather name={iconName} size={25} color={itemColor} />
      <Label color={itemColor}>{title}</Label>
    </Container>
  );
};

export default MenuItem;
