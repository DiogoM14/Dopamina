import React from 'react'
import { Text } from 'react-native'

import { Feather } from "@expo/vector-icons"
import { Container, Header, Tasks, Description, Title, Add } from './styles'
import Task from '../../components/Task'

const TodoCard: React.FC = ({ navigation, route }) => {
  return (
    <Container>
      <Header>
      <Description>
        Workspace
        <Text style={{ color: '#c28ffb', fontSize: 24, fontWeight: 'bold' }}>.</Text>
      </Description>
      <Title>{route.params.cardName}</Title>
      </Header>

      <Tasks>
        <Task />
      </Tasks>

      <Add>
        <Feather name="plus" size={38} color="#1e1e1e" />
      </Add>
    </Container>
  )
}

export default TodoCard;
