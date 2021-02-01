import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { db } from '../../services/firebase';

import { Feather } from "@expo/vector-icons"
import { Container, Wrapper, Header, Tasks, Description, Title, Add, BottomInput, TaskInput } from './styles'
import Task from '../../components/Task'
import { FlatList } from 'react-native-gesture-handler';

const TodoCard: React.FC = ({ navigation, route }) => {
  const [ tasks, setTasks ] = useState([])
  const [ tasksList, setTasksList ] = useState([])

  const createTask = async () => {
    await db
      .collection('tasks')
      .add({ 
        taskName: tasks,
      })
      .catch((err) => alert(err))
  }

  useEffect(() => {
    const unsubscribe = db.collection('tasks').onSnapshot(snapshot => (
      setTasksList(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
      })))
    ))

    return unsubscribe
  }, [])

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
          {tasksList.map(({ id, data: { taskName } }) => (
              <Task 
                key={id}
                taskName={taskName}
              />
              // <Text>{taskName}</Text>
            ))}
        </Tasks>
      </Wrapper>
      
      
      <BottomInput>
        <TaskInput 
          placeholder="Your task..." 
          value={tasks}
          onChangeText={(text) => setTasks(text)}
        />
        <Add onPress={createTask}>
          <Feather name="plus" size={38} color="#1e1e1e" />
        </Add>
        </BottomInput>
    </Container>
    )
  }
  
  export default TodoCard;
  