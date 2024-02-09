import styled from "styled-components"
import SimpleButton from "./components/SimpleButton"
import DynamicButton from "./components/DynamicButton"
import { useImmer } from 'use-immer'
import { useRef } from "react"

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
    {type: 'simple', content: 1, blue: false, counter: 0}, {type: 'simple', content: 2, blue: false, counter: 0}, {type: 'simple', content: 3, blue: false, counter: 0}, {type: 'simple', content: '+', blue: true},
    {type: 'simple', content: 4, blue: false, counter: 0}, {type: 'simple', content: 5, blue: false, counter: 0}, {type: 'simple', content: 6, blue: false, counter: 0}, {type: 'simple', content: '-', blue: true},
    {type: 'simple', content: 7, blue: false, counter: 0}, {type: 'simple', content: 8, blue: false, counter: 0}, {type: 'simple', content: 9, blue: false, counter: 0}, {type: 'simple', content: 'x', value: '*', blue: true},
    {type: 'simple', content: 'R', blue: true}, {type: 'simple', content: '0', blue: false, counter: 0}, {type: 'simple', content: 'EX', blue: true}, {type: 'simple', content: '/', blue: true},
    {type: 'dynamic', content: 0, counter: 0, active: false}, {type: 'dynamic', content: 0, counter: 0, active: false}, {type: 'dynamic', content: 0, counter: 0, active: false}, {type: 'dynamic', content: 0, counter: 0, active: false}
  ])
  const activeDButtonsIds = useRef([])
  const currentExpression = useRef('')
  const latestNumButtonPressedId = useRef(0)

  function buttonHandler(id, value) {
    if(value === 'EX') {
      const evaluatedExpression = eval(currentExpression.current)
      console.log(evaluatedExpression)
      updateLayout(layout => {
        activeDButtonsIds.current.forEach(id => {
          layout[id].content = evaluatedExpression
        })
      })
      currentExpression.current = ''
    } else if(value === 'R') {
      currentExpression.current = ''
      updateLayout(layout => {
        layout[latestNumButtonPressedId.current].counter = 0
      })
    } else {
      currentExpression.current = currentExpression.current + value
    }

    if(Number.isFinite(+value)) {
      console.log(layout[latestNumButtonPressedId.current])
      if(layout[latestNumButtonPressedId.current].content == value) {
        updateLayout(layout => {
          layout[latestNumButtonPressedId.current].counter++
        })
      } else {
        const latestId = latestNumButtonPressedId.current
        latestNumButtonPressedId.current = id
        updateLayout(layout => {
          layout[latestId].counter = 0
          layout[latestNumButtonPressedId.current].counter++
        })
      }
    }
    console.log(currentExpression.current)
  }

  function activateDynamicButtonHandler(id) {
    updateLayout(buttons => {
      if(buttons[id].active) {
        buttons[id].active = false
        activeDButtonsIds.current = activeDButtonsIds.current.filter(currentId => currentId !== id)
      } else {
        buttons[id].active = true
        activeDButtonsIds.current = Array.from(new Set([...activeDButtonsIds.current, id]))
      }
      console.log(activeDButtonsIds.current)
    })
  }
  return <CalculatorBox>
    { layout.map((element, index) => {
      if(element.type === 'simple') {
        return <SimpleButton key={index} blue={element.blue} counter={element.counter} onClick={(value) => buttonHandler(index, value)} value={element.value}>{element.content}</SimpleButton>
      } else if(element.type === 'dynamic') {
        return <DynamicButton key={index} active={element.active} onActivate={() => activateDynamicButtonHandler(index)} onClick={(value) => buttonHandler(index, value)} value={element.value} counter={element.counter}>{element.content}</DynamicButton>
      }
    }) }
    
  </CalculatorBox>
}