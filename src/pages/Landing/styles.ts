import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #000;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-top: 50px;
  padding: 10px 20px;
  background-color: #131418;
  align-items: center;
  justify-content: space-between;
  
`;

export const HeaderLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  font-family: Ubuntu_700Bold;
`;

export const UserImg = styled.Image`
  width: 42px;
  height: 42px;
  margin-left: 20px;
`; 

export const Welcome = styled.View`
  background-color: #131418;
  padding: 30px 20px;
  font-family: Ubuntu_700Bold;

`;

export const Message = styled.Text`
  color: #fff;
  font-size: 38px;
  font-weight: 700;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Hand = styled.Image`
  width: 64px;
  height: 64px;
`;
