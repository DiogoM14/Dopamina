import styled, { css } from "styled-components/native";

import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 25px;
  background-color: #111111 ;
`

export const Wrapper = styled.ScrollView``


export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`

export const UserImage = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 25px;
`

export const WelcomeMessage = styled.View`
  margin-top: 40px;
`
export const Hello = styled.Text`
  font-size: 22px;
  margin-bottom: 20px;
  color: #8d8d8d;
`
export const Tasks = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #e1e1e1;
`

export const Search = styled.TextInput.attrs({
  placeholderTextColor: "#e1e1e1"
})`
  height: 50px;
  background: #1e1e1e;
  color: #e1e1e1;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);

  padding: 0 20px;
  margin-top: 40px;
  border-radius: 12px;
`

export const ProgressContainer = styled(RectButton)`
  flex-direction: row;
  width: 100%;
  height: 90px;
  background: #1e1e1e;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
  justify-content: space-between;
  align-items: center;

  border-radius: 12px;
  padding: 20px 20px;
  margin-top: 40px;
`

export const Card = styled.View`
  flex-direction: column;
  justify-content: space-between;
`

export const TextTop = styled.Text`
  color: #e1e1e1;
  font-size: 22px;
  font-weight: bold;
`

export const TextBottom = styled.Text`
  color: #8d8d8d;
  font-size: 18px;
`

export const CardButton = styled.View`
  width: 40px;
  height: 40px;
  background-color: #c28ffb;
  border-radius: 12px;

  justify-content: center;
  align-items: center;
`

export const TasksSection = styled.View`
flex-direction: column;
margin-top: 40px;
`

export const TasksTitle = styled.Text`
  font-size: 32px;
  font-weight: bold;

  margin-bottom: 20px;
  color: #e1e1e1;
`

export const TasksNav = styled.View`
  flex-direction: row;
  /* justify-content: space-around; */
`

export const CardRecentlySection = styled.ScrollView``

export const TasksCard = styled.View`


`
