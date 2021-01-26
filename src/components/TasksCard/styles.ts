import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`

`;

export const Card = styled(RectButton)`
  flex-direction: column;
  width: 200px;
  height: 220px;
  background: #1e1e1e;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);

  justify-content: space-between;
  border-radius: 12px;
  margin: 20px 20px 20px 0;
  padding: 20px;
`

export const CardTexts = styled.View``

export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #e1e1e1;

  margin-bottom: 10px;
`

export const CardDescription = styled.Text`
  font-size: 16px;
  color: #8d8d8d;
`

export const ProgressBar = styled.View`
  bottom: 0;
`

export const ProgressContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const ProgressText = styled.Text`
  font-size: 16px;
  color: #e1e1e1;
  margin-bottom: 10px;

`

export const ProgressPerc = styled.Text`
  font-size: 16px;
  color: #c28ffb;
  margin-bottom: 10px;

`

