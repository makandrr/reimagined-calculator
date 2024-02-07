import styled from "styled-components"
import Calculator from "./Calculator"

const RootContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

const FooterText = styled.div`
  position: fixed;
  bottom: .5rem;
  right: .5rem;
  opacity: 0.2
`

function App() {
  return (
    <RootContainer>
      <Calculator />
      <FooterText>Reimaginated Calculator | Maksim Andriushin [AmCNC] | 2024</FooterText>
    </RootContainer>
  )
}

export default App
