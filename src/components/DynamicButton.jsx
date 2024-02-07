import styled from "styled-components"

const DynamicButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Button = styled.button`
  border: 0;
  width: 4.5rem;
  height: 4.5rem;
  font-size: 2.5rem;
  border-radius: .5rem;
  background-color: #005230;
  color: #bfe7f8;
`

const DynamicButtonLed = styled.div`
  width: 6px;
  height: 6px;
  background-color: ${props => props.$active ? 'yellow' : 'grey'};
  border-radius: 100%;
  box-shadow: ${props => props.$active ? '0 0 10px yellow' : 'none'};
  margin-top: 1rem;
`

export default function DynamicButton({children, active}) {
  return <DynamicButtonContainer>
    <Button>{children}</Button>
    <DynamicButtonLed $active={active} />
  </DynamicButtonContainer>
}