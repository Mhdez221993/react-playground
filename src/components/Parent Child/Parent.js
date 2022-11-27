import React, { useState } from 'react'

import ChildTwo from './ChildTwo'

const Parent = ({children}) => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Doe')

  const person = {
    fname: 'Bruce',
    lname: 'Wayne'
  }

  const handleClick = () => {}

  console.log('Parent render')
  return (
    <div>
      <button onClick={() => setCount(prev => prev + 1)}>Parent Count = {count}</button>
      <button onClick={() => setName('John')}>Parent Count = {name}</button>
      <ChildTwo handleClick={handleClick} name={name} />
    </div>
  )
}

export default Parent
