import React, { useCallback, useMemo, useState } from 'react'

import ChildTwo from './ChildTwo'

const Parent = ({children}) => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Doe')

  const person = {
    fname: 'Bruce',
    lname: 'Wayne'
  }

  const handleClick = () => {}

  const memoizedPerson = useMemo(() => person, [])
  const memoizedHandleClick = useCallback(handleClick, [])




  console.log('Parent render')
  return (
    <div>
      <button onClick={() => setCount(prev => prev + 1)}>Parent Count = {count}</button>
      <button onClick={() => setName('John')}>Parent Count = {name}</button>
      <ChildTwo handleClick={memoizedHandleClick} name={name} />
    </div>
  )
}

export default Parent
