import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`

`;

export const Card = styled(RectButton)`
  width: 140px;
  height: 200px;
  background: #1e1e1e;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);

  border-radius: 12px;
  margin: 20px 10px;
`
