import React, { useState } from 'react';

export const CountContex = React.createContext()

const ContextParent = ({children}) => {
  const [count, setCount] = useState(0)

  console.log('ContextParent Render');
  return (
    <div>
        <button onClick={() => setCount(prev => prev + 1)}>Count - {count}</button>
        <CountContex.Provider value={count}>
          {children}
        </CountContex.Provider>
    </div>
  );
};

export default ContextParent;