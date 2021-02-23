import { useState } from 'react'
import './App.css'
import List from './List'

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
    <div className="App">
      <h1 className="App__header">
        Let's talk about{' '}
        <a href="https://styled-components.com">styled-components</a>!
      </h1>
      <List data={data} onClick={handleClick} selected={selected} />
      <h2>Let's create some more components!</h2>
      <ol>
        <li>Button</li>
        <li>PasswordInput</li>
      </ol>
    </div>
  )
}
