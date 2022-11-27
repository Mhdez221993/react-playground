import React, { useState } from 'react';

import Child from './Child';

const Parent = ({children}) => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Doe')

  console.log('Parent render');
  return (
    <div>
      <button onClick={() => setCount(prev => prev + 1)}>Parent Count = {count}</button>
      <button onClick={() => setName('John')}>Parent Count = {name}</button>
      <Child name={name}>
        <strong>Childrend</strong>
      </Child>
    </div>
  )
}

export default Parent
