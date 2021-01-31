import React from 'react'
import { Text } from 'react-native'

import { Feather } from "@expo/vector-icons"
import { Container, Wrapper, Header, Tasks, Description, Title, Add, BottomInput, TaskInput } from './styles'
import Task from '../../components/Task'

const TodoCard: React.FC = ({ navigation, route }) => {
  return (
    <Container>
      <Wrapper 
        showsVeticalScrollIndicator={false} 
      >
          <Header>
            <Description>
              Workspace
              <Text style={{ color: '#c28ffb', fontSize: 24, fontWeight: 'bold' }}>.</Text>
            </Description>
          <Title>{route.params.cardName}</Title>
        </Header>
        
        <Tasks>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </Tasks>
      </Wrapper>
      
      
      <BottomInput>
        <TaskInput placeholder="Your task..." />
        <Add>
          <Feather name="plus" size={38} color="#1e1e1e" />
        </Add>
        </BottomInput>
    </Container>
    )
  }
  
  export default TodoCard;
  