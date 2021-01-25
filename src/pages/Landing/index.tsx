import React from 'react';
import { Feather } from "@expo/vector-icons";

import { Container, Header, UserImage, WelcomeMessage, Hello, Tasks, Search, TasksSection, TasksTitle, TasksNav, NavTitle, TasksCard } from './styles';

import userImg from "../../assets/user.png"

const Landing: React.FC = () => {
  return (
    <Container>
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

      <TasksSection>
        <TasksTitle>My Tasks</TasksTitle>
        <TasksNav>
          <NavTitle>Recently</NavTitle>
          <NavTitle>Today</NavTitle>
          <NavTitle>Upcoming</NavTitle>
        </TasksNav>
        <TasksCard></TasksCard>
      </TasksSection>
    </Container>
  );
};

export default Landing;
