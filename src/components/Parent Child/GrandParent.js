import React, { useState } from 'react';

import Child from './Child';
import Parent from './Parent';

const GrandParent = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(prev => prev + 1)}>GrandParent count - {count}</button>
      <Parent newcount={count}>
        <Child />
      </Parent>
    </div>
  )
}

export default GrandParent
