import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 50px 25px;
  background-color: #000;
`


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
  color: #979b9f;
`
export const Tasks = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #f3f3f3;
`

export const Search = styled.TextInput.attrs({
  placeholderTextColor: "#f3f3f3"
})`
  height: 50px;
  background: #353537;
  color: #f3f3f3;

  padding: 0 20px;
  margin-top: 40px;
  border-radius: 8px;
`

export const TasksSection = styled.View`
flex-direction: column;
margin-top: 40px;
`

export const TasksTitle = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #f3f3f3;
`

export const TasksNav = styled.View`
  flex-direction: row;
  justify-content: space-around;
`

export const NavTitle = styled.Text`
  color: #f3f3f3;

`

export const TasksCard = styled.View``
