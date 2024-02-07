import styled from "styled-components"
import SimpleButton from "./components/SimpleButton"
import DynamicButton from "./components/DynamicButton"

const CalculatorBox = styled.div`
  background-color: #1f1f1f;
  padding: 1rem;
  border-radius: 1rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr)
`

export default function Calculator() {
  return <CalculatorBox>

    <SimpleButton>1</SimpleButton>
    <SimpleButton>2</SimpleButton>
    <SimpleButton>3</SimpleButton>
    <SimpleButton blue>+</SimpleButton>

    <SimpleButton>4</SimpleButton>
    <SimpleButton>5</SimpleButton>
    <SimpleButton>6</SimpleButton>
    <SimpleButton blue>-</SimpleButton>

    <SimpleButton>7</SimpleButton>
    <SimpleButton>8</SimpleButton>
    <SimpleButton>9</SimpleButton>
    <SimpleButton blue>x</SimpleButton>

    <div></div>
    <SimpleButton>0</SimpleButton>
    <div></div>
    <SimpleButton blue>/</SimpleButton>

    <DynamicButton active>42</DynamicButton>
    <DynamicButton>0</DynamicButton>
    <DynamicButton>0</DynamicButton>
    <DynamicButton>0</DynamicButton>
  </CalculatorBox>
}