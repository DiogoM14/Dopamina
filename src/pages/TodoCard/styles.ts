import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 0 16px;
  flex: 1;
`

export const Wrapper = styled.ScrollView`

`

export const Header = styled.View`

`

export const Tasks = styled.View`
  margin-top: 40px;
`

export const Description = styled.Text`
  color: #8d8d8d;
  font-size: 24px;
`

export const Title = styled.Text`
  color: #e1e1e1;
  font-size: 32px;
  font-weight: bold;
`

export const BottomInput = styled.View`
  position: absolute;
  flex-direction: row;

  padding-top: 10px;
  background: #111111;

  width: 100%;

  right: 0;
  bottom: 0;

  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`

export const Add = styled(RectButton)`
  width: 70px;
  height: 70px;
  background: #c28ffb;
  margin-bottom: 16px;
  border-radius: 30px;

  align-items: center;
  justify-content: center;
`

export const TaskInput = styled.TextInput.attrs({
  placeholderTextColor: "#e1e1e1"
})`
  position: relative;
  width: 70%;
  color: #e1e1e1;
  height: 50px;
  background: #1e1e1e;
  border-radius: 12px;
  margin-bottom: 16px;
  padding: 0 20px;
`