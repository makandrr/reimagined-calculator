import styled from "styled-components"
import SimpleButton from "./components/SimpleButton"
import DynamicButton from "./components/DynamicButton"
import { useImmer } from 'use-immer'

const CalculatorBox = styled.div`
  background-color: #1f1f1f;
  padding: 1rem;
  border-radius: 1rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr)
`

export default function Calculator() {
  const [layout, updateLayout] = useImmer([
    {type: 'simple', value: 1, blue: false, counter: 7}, {type: 'simple', value: 2, blue: false, counter: 0}, {type: 'simple', value: 3, blue: false, counter: 0}, {type: 'simple', value: '+', blue: true},
    {type: 'simple', value: 4, blue: false, counter: 0}, {type: 'simple', value: 5, blue: false, counter: 0}, {type: 'simple', value: 6, blue: false, counter: 0}, {type: 'simple', value: '-', blue: true},
    {type: 'simple', value: 7, blue: false, counter: 0}, {type: 'simple', value: 8, blue: false, counter: 0}, {type: 'simple', value: 9, blue: false, counter: 0}, {type: 'simple', value: 'x', blue: true},
    {type: 'simple', value: '.'}, {type: 'simple', value: '0', blue: false, counter: 0}, {type: 'simple', value: 'EX', blue: true}, {type: 'simple', value: '/', blue: true},
    {type: 'dynamic', value: 15, active: false}, {type: 'dynamic', value: 15, active: true}, {type: 'dynamic', value: 15, active: false}, {type: 'dynamic', value: 15, active: false}
  ])
  return <CalculatorBox>
    { layout.map((element, index) => {
      if(element.type === 'simple') {
        return <SimpleButton key={index} blue={element.blue} counter={element.counter}>{element.value}</SimpleButton>
      } else if(element.type === 'dynamic') {
        return <DynamicButton key={index} active={element.active}>{element.value}</DynamicButton>
      }
    }) }
    
  </CalculatorBox>
}