import styled from "styled-components"
import StyledButton from "./StyledButton"

const Button = styled(StyledButton)`
  background-color: ${props => props.$blue ? '#004a84' : '#28282a'};
  transition: 100ms all;
  position: relative;
  &:hover {
    background-color: ${props => props.$blue ? '#1f6e9c' : '#535354'};
  }
  &:active {
    background-color: ${props => props.$blue ? '#237bad' : '#626263'};
  }
`

const Counter = styled.div`
  font-size: 0.8rem;
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
`

export default function SimpleButton({blue, children, value = children, counter = '', onClick = () => {}}) {
  return <Button onClick={() => onClick(value)} $blue={blue}>{children}<Counter>{counter !== 0 ? counter : ''}</Counter></Button>
}