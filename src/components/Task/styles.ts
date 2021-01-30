import CheckBox from '@react-native-community/checkbox'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  background: #1e1e1e;
  height: 60px;
  width: 100%;

  align-items: center;

  padding: 0 8px;
  border-radius: 12px;
`

export const TaskCheckbox = styled(CheckBox)``

export const TaskTitle = styled.Text`
  color: #e1e1e1;
`
