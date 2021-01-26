import React, { useCallback, useState } from 'react';
import { Feather } from "@expo/vector-icons";
import Constants from 'expo-constants';

import { Container, Wrapper, Header, UserImage, WelcomeMessage, Hello, Tasks, Search, TasksSection, TasksTitle, TasksNav, NavTitle, TasksCard, ProgressContainer, Card, TextTop, TextBottom, CardButton, CardRecentlySection } from './styles';

import SelectTasksButton from '../../components/SelectTasksButton'

import userImg from "../../assets/user.png"

// interface ButtonProps {
//   flag: boolean
// }

const Landing: React.FC = () => {
  return (
    <Container>
      <Wrapper style={{marginTop: Constants.statusBarHeight}} >
      <Header>
        <UserImage source={userImg} />
        <Feather name="menu" size={38} color="#f3f3f3" />
      </Header>

      <WelcomeMessage>  
        <Hello>Hello, Marry!</Hello>
        <Tasks>You've got</Tasks>
        <Tasks>8 Tasks today!</Tasks>
      </WelcomeMessage>

      <Search placeholder="Search your tasks..." />

      <ProgressContainer>
        <Card>
          <TextTop>Project Timeline</TextTop>
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
        <CardRecentlySection horizontal={true} >
          <TasksCard></TasksCard>
          <TasksCard></TasksCard>
          <TasksCard></TasksCard>
          <TasksCard></TasksCard>
          <TasksCard></TasksCard>
          <TasksCard></TasksCard>
        </CardRecentlySection>
      </TasksSection>
      </Wrapper>
    </Container>
  );
};

export default Landing;
