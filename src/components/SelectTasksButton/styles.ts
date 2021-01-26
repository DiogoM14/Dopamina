import { RectButton } from 'react-native-gesture-handler';
import styled, {css} from 'styled-components/native';

interface ButtonProps {
  isFlaged: boolean
}

export const Container = styled.View`
  flex-direction: row;
`;

export const NavButton = styled(RectButton)`
  background: #1e1e1e;
  padding: 5px 10px;
  border-radius: 12px;
  margin-right: 25px;

  ${(props) =>
  props.isFlaged && css`
    color: #c28ffb;
  `}
`

export const NavTitle = styled.Text<ButtonProps>`
  color: #8d8d8d;
  font-size: 18px;
`
