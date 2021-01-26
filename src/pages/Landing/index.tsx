import React from 'react';
import { Feather } from "@expo/vector-icons";
import Constants from 'expo-constants';


import { Container, Wrapper, Header, UserImage, Menu, WelcomeMessage, Hello, WelcomeImage, Tasks, Search, TasksSection, TasksTitle, TasksNav, ProgressContainer, Card, TextTop, TextBottom, CardButton, CardRecentlySection } from './styles';

import SelectTasksButton from '../../components/SelectTasksButton'
import TaskCard from '../../components/TasksCard'

import userImg from "../../assets/user.png"
import welcomeimg from "../../assets/hand.png"

const Landing: React.FC = () => {
  return (
    <Container>
      <Wrapper 
        showsVerticalScrollIndicator={false} 
        style={{marginTop: Constants.statusBarHeight + 10}}
      >
      <Header>
        <UserImage source={userImg} />
        <Menu>
          <Feather name="plus-circle" size={24} color="#e1e1e1" />
          <Feather name="star" size={24} color="#e1e1e1" style={{marginLeft: 15}} />
          <Feather name="bar-chart" size={24} color="#e1e1e1" style={{marginLeft: 15}} />
          <Feather name="bell" size={24} color="#e1e1e1" style={{marginLeft: 15}} />
        </Menu>
      </Header>

      <WelcomeMessage>  
        <Hello>Hello, Marry!
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
          <TaskCard  
            cardTitle="Home Tasks"
            cardDescription="My weekly Home Tasks."
            progressInt={35}
            progressPerc={0.35}
          />

          <TaskCard  
            cardTitle="School Homework"
            cardDescription="School Homework for this week."
            progressInt={72}
            progressPerc={0.72}
          />

          <TaskCard  
            cardTitle="Travel to-do"
            cardDescription="To prepare my suitcase for the trip."
            progressInt={10}
            progressPerc={0.1}
          />
        </CardRecentlySection>
      </TasksSection>
      </Wrapper>
    </Container>
  );
};

export default Landing;
