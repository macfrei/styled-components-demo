import { useState } from 'react'
import styled from 'styled-components/macro'
import Button from './Button'
import List from './List'
import PasswordInput from './PasswordInput'

const data = [
  'Syntax & components',
  'Global styles',
  'Passing props',
  'Extending styles',
  'Nesting styles',
  'Naming & best practices',
]

export default function App() {
  const [selected, setSelected] = useState('')

  function handleClick(index) {
    setSelected(index)
  }

  return (
    <AppGrid>
      <Heading>
        Let's talk about{' '}
        <a href="https://styled-components.com">styled-components</a>!
      </Heading>
      <List data={data} onClick={handleClick} selected={selected} />
      <h2>Let's create some more components!</h2>
      <Button bgColor="hotpink">My Button!</Button>
      <RedButton>Red Button!</RedButton>
      <PasswordInput />
      <ol>
        <li>Button</li>
        <li>PasswordInput</li>
      </ol>
    </AppGrid>
  )
}

const RedButton = styled(Button)`
  color: white;
  background-color: red;
`

const AppGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  padding: 8px;
  background-color: skyblue;
`
const Heading = styled.h1`
  margin: 0;
`
