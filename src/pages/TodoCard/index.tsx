import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Text } from 'react-native'
import { auth, db } from '../../services/firebase';
import * as firebase from 'firebase'

import { Feather } from "@expo/vector-icons"
import { Container, Wrapper, Header, Tasks, Description, Title, Add, BottomInput, TaskInput } from './styles'
import Task from '../../components/Task'

const TodoCard: React.FC = ({ navigation, route }) => {
  const [ tasks, setTasks ] = useState("")
  const [ tasksList, setTasksList ] = useState([])

  const createTask = () => {
     db.collection('todoCard').doc(route.params.id).collection('tasks').add({ 
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        taskName: tasks,
        email: auth.currentUser.email,
      })
      .catch((err) => alert(err))

      setTasks('')
  }

  useLayoutEffect(() => {
    const unsubscribe = db
      .collection('todoCard')
      .doc(route.params.id)
      .collection('tasks')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => 
        setTasksList(snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
       })))
    )
    console.log("consoleeeeee" + tasksList.data)
    return unsubscribe
  }, [route])

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
          {tasksList.map(({ id, data }) => (
            
              <Task 
                key={id}
                taskName={data.email}
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
  