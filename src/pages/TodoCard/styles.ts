import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 0 16px;
  flex: 1;
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

export const Add = styled(RectButton)`
  position: absolute;
  width: 70px;
  height: 70px;
  right: 0;
  bottom: 0;

  align-items: center;
  justify-content: center;

  background: #c28ffb;
  margin: 16px;
  border-radius: 30px;
`
