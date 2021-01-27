import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 50px 16px;
  background-color: #111111;
`

export const FormTitle = styled.View`
  flex-direction: column;
  margin-bottom: 20px;
`

export const Slogan = styled.Text`
  font-size: 42px;
  font-weight: bold;
  color: #e1e1e1;
`

export const RegisterContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;

  margin-top: 20px;
`

export const RegisterMessage = styled.Text`
  color: #e1e1e1;
  font-size: 16px;
`

export const RegisterLink = styled.Text`
  color: #c28ffb;
  font-size: 16px;
`

export const Form = styled.View`
  flex-direction: column;
  margin-top: 80px;
`

export const FormInput = styled.TextInput.attrs({
  placeholderTextColor: "#e1e1e1"
})`
  width: 100%;
  height: 50px;
  background: #1e1e1e;

  padding: 0 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
`

export const FormButton = styled(RectButton)`
  width: 50%;
  height: 50px;
  background: #c28ffb;

  border-radius: 12px;
  margin: 40px auto 10px auto;

  align-items: center;
  justify-content: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
`

export const ButtonText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #1e1e1e;
`

