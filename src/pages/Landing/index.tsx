import React from 'react';
import { Feather } from "@expo/vector-icons";

import { Container, Title, Header, UserImg, HeaderLeft, Welcome, Message, Wrapper, Hand } from './styles';

import userImg from "../../assets/user.png";
import handIcon from "../../assets/hand.png";

const Landing: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Dashboard</Title>
        <HeaderLeft>
          <Feather name="message-circle" size={32} color="#fff" />
          <UserImg source={userImg} resizeMode="contain" />          
        </HeaderLeft>
      </Header>
      <Welcome>
        <Message>Hello, </Message>
        <Wrapper>
          <Message>Diogo Martins</Message>
          <Hand source={handIcon} resizeMode="contain" />
        </Wrapper>
      </Welcome>
    </Container>
  );
};

export default Landing;
