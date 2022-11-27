import React, { useState } from 'react';

const Parent = ({children}) => {
  const [count, setCount] = useState(0)

  console.log('Parent render');
  return (
    <div>
      <button onClick={() => setCount(prev => prev + 1)}>Parent Count = {count}</button>
      {children}
    </div>
  )
}

export default Parent
