import React, { useState } from 'react';

import { ChildA } from './ContextChildrend';

export const CountContex = React.createContext()

const ContextParent = () => {
  const [count, setCount] = useState(0)

  console.log('ContextParent Render');
  return (
    <div>
        <button onClick={() => setCount(prev => prev + 1)}>Count - {count}</button>
        <CountContex.Provider value={count}>
          <ChildA />
        </CountContex.Provider>
    </div>
  );
};

export default ContextParent;