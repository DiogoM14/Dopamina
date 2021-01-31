import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { db } from '../../services/firebase';

import { Feather } from "@expo/vector-icons"
import { Container, Wrapper, Header, Tasks, Description, Title, Add, BottomInput, TaskInput } from './styles'
import Task from '../../components/Task'

const TodoCard: React.FC = ({ navigation, route }) => {
  const [ taskInput, setTaskInput ] = useState("")

  const createTask = async () => {
    await db
      .collection('tasks')
      .add({ 
        taskName: taskInput,
      })
      .catch((err) => alert(err))
  }

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

        </Tasks>
      </Wrapper>
      
      
      <BottomInput>
        <TaskInput 
          placeholder="Your task..." 
          value={taskInput}
          onChangeText={(text) => setTaskInput(text)}
        />
        <Add onPress={createTask}>
          <Feather name="plus" size={38} color="#1e1e1e" />
        </Add>
        </BottomInput>
    </Container>
    )
  }
  
  export default TodoCard;
  