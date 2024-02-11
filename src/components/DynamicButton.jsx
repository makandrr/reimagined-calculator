import styled, { css } from "styled-components"
import StyledButton from "./StyledButton"




const Button = styled(StyledButton)`
  background-color: #005230;
  transition: 100ms all;
  position: relative;

  &:hover {
    background-color: #207558;
  }
  &:active {
    background-color: #288d6b;
  }
`

const LedContainer = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 .5rem 0;
  background: transparent;
  border: none;
  cursor: pointer;

  ${props => !props.$active ? css`
  &:hover > div {
    background: #0270c4;
    box-shadow: 0 0 10px #0270c4;
  }
  `: ''}
`

const Led = styled.div`
  width: 6px;
  height: 6px;
  background-color: ${props => props.$active ? props.$color : 'grey'};
  border-radius: 100%;
  transition: 150ms all;
  box-shadow: ${props => props.$active ? '0 0 20px 3px ' + props.$color : 'none'};
`

const Counter = styled.div`
  font-size: 0.8rem;
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
`

export default function DynamicButton({counter = 0, children, value = children, active, onClick = () => {}, onActivate = () => {}, ledColorOverload}) {
  return <div>
    <Button onClick={() => onClick(value)}>
      <Counter>{counter !== 0 ? counter : ''}</Counter>
      {value}
      </Button>
    <LedContainer onClick={onActivate} $active={active}>
      <Led $active={ledColorOverload ? true : active} $color={ledColorOverload || 'yellow'} />
    </LedContainer>
  </div>
}