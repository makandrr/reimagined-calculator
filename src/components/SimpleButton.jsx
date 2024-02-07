import styled from "styled-components"

const Button = styled.button`
  border: 0;
  width: 4.5rem;
  height: 4.5rem;
  font-size: 2.5rem;
  border-radius: .5rem;
  background-color: ${props => props.$blue ? '#004a84' : '#28282a'};
  color: #bfe7f8;

`

export default function SimpleButton({blue, children}) {
  return <Button $blue={blue}>{children}</Button>
}