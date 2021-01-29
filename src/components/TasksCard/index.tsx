import React from 'react';
import * as Progress from 'react-native-progress'

import { Container, Card, CardTexts, CardTitle, CardDescription, ProgressBar, ProgressContainer, ProgressText, ProgressPerc } from './styles';

interface CardProps {
  id: string
  cardTitle: string
  cardDescription: string
  progressPerc: number
  progressInt: number
}

const TasksCard: React.FC<CardProps> = ({ id, cardTitle, cardDescription, progressPerc, progressInt, enterTodoCard }) => {
  return (
    <Container  key={id}>
      <Card onPress={() => enterTodoCard(id, cardTitle)}>
        <CardTexts>
          <CardTitle>{cardTitle}</CardTitle>
          <CardDescription>{cardDescription}</CardDescription> 
        </CardTexts>

        <ProgressBar>
          <ProgressContainer>
            <ProgressText>Progress</ProgressText>
            <ProgressPerc>{progressInt}%</ProgressPerc>
          </ProgressContainer>
          <Progress.Bar 
            progress={progressPerc} 
            width={160} 
            color='#e1e1e1'
            borderColor='#e1e1e1'
            unfilledColor='rgba(300, 300, 300, 0.3)'
          />
        </ProgressBar>
      </Card>
    </Container>
  );
};

export default TasksCard;
