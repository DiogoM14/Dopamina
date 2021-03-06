import { RectButton } from "react-native-gesture-handler"
import styled from "styled-components/native"

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 16px;
  background-color: #111111;

  justify-content: center;
  align-items: center;
`

export const Form = styled.View`
  flex-direction: column;
  width: 100%;
`

export const FormTitle = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #e1e1e1;
  margin-bottom: 100px;
  text-align: center;
`

export const FormInput = styled.TextInput.attrs({
  placeholderTextColor: "#e1e1e1"
})`
  width: 100%;
  height: 50px;
  background: #1e1e1e;
  color: #e1e1e1;

  padding: 0 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
`

export const FormDate = styled(RectButton)`
  position: absolute;
  bottom: 0;
  flex-direction: row;
  width: 50%;
  height: 40px;
  background: #1e1e1e;

  border-radius: 12px;
  margin: auto;
  margin-bottom: 20px;

  justify-content: center;
  align-items: center;
`

export const DateText = styled.Text`
  font-size: 16px;
  color: #e1e1e1;
  margin-left: 10px;
`

export const FormButton = styled(RectButton)`
  width: 50%;
  height: 60px;
  background: #c28ffb;

  padding: 0 20px;
  margin-top: 20px;
  border-radius: 12px;
  margin: auto;

  align-items: center;
  justify-content: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
`

export const ButtonText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #1e1e1e;
`

