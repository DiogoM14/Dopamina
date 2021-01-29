import React from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

const TodoCard: React.FC = ({ navigation, route }) => {
  return (
    <Container>
      <Text style={{color: '#fff', fontSize: 24}}>{route.params.cardName}</Text>
    </Container>
  );
};

export default TodoCard;
