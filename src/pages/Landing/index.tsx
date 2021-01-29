import React, { useEffect, useState } from 'react'
import { Feather } from "@expo/vector-icons"
import Constants from 'expo-constants'
import { auth, db } from '../../services/firebase'

import { Container, Wrapper, Header, UserImage, Menu, WelcomeMessage, Hello, WelcomeImage, Tasks, Search, TasksSection, TasksTitle, TasksNav, ProgressContainer, Card, TextTop, TextBottom, CardButton, CardRecentlySection } from './styles'

import SelectTasksButton from '../../components/SelectTasksButton'
import TaskCard from '../../components/TasksCard'

import welcomeimg from "../../assets/hand.png"

const Landing: React.FC = ({ navigation }) => {
  const [todoCard, setTodoCard] = useState([])

  function handleNavigateToAddTodo() {
    navigation.navigate('AddTodo')
  }

  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace('Login')
    })
  }

  useEffect(() => {
    const unsubscribe = db.collection('todoCard').onSnapshot(snapshot => (
      setTodoCard(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
      })))
    ))

    return unsubscribe
  }, [])

  const enterTodoCard = (id, cardName) => {
    navigation.navigate('TodoCard', { 
      id,
      cardName,
    })
  }

  return (
    <Container>
      <Wrapper 
        showsVerticalScrollIndicator={false} 
        style={{marginTop: Constants.statusBarHeight + 10}}
      >
      <Header>
        <UserImage source={{ uri: auth?.currentUser?.photoURL }} />
        <Menu>
          <Feather onPress={handleNavigateToAddTodo} name="plus-circle" size={24} color="#e1e1e1" />
          <Feather name="bell" size={24} color="#e1e1e1" style={{marginLeft: 15}} />
          <Feather name="bar-chart" size={24} color="#e1e1e1" style={{marginLeft: 15}} />
          <Feather onPress={signOutUser} name="log-out" size={24} color="#e1e1e1" style={{marginLeft: 15}} />
        </Menu>
      </Header>

      <WelcomeMessage>  
        <Hello>Hello, { auth?.currentUser?.displayName }!
          <WelcomeImage source={welcomeimg} />
        </Hello>
        <Tasks>You've got</Tasks>
        <Tasks>8 Tasks today!</Tasks>
      </WelcomeMessage>

      <Search placeholder="Search your tasks..." />

      <ProgressContainer>
        <Card>
          <TextTop>Projects Timeline</TextTop>
          <TextBottom>You can track Dopamina</TextBottom>
        </Card>
        <CardButton>
          <Feather name="chevron-right" size={24} />
        </CardButton>
      </ProgressContainer>

      <TasksSection>
        <TasksTitle>My Tasks</TasksTitle>
        <TasksNav>
          <SelectTasksButton text="Recently" />
          <SelectTasksButton text="Today" />
          <SelectTasksButton text="Upcoming" />
        </TasksNav>
        <CardRecentlySection 
          horizontal={true}
          showsHorizontalScrollIndicator={false} 
          >
            {todoCard.map(({ id, data: { cardName, cardDescription } }) => (
              <TaskCard  
                key={id}
                cardTitle={cardName}
                cardDescription={cardDescription}
                progressInt={0}
                progressPerc={0}
                enterTodoCard={enterTodoCard}
              />
            ))}
          
        </CardRecentlySection>
      </TasksSection>
      </Wrapper>
    </Container>
  )
}

export default Landing;
