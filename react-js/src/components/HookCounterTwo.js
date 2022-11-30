import React, { useState } from 'react';

const HookCounterTwo = () => {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)

  const inCrementFive = () => {
    for (let index = 0; index < 5; index++) {
      setCount(prev => prev + 1)
    }

  }

  return (
    <div>
      <h1>HookCounterTwo {count}</h1>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
      <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
      <button onClick={inCrementFive}>Increment 5</button>
    </div>
  );
};

export default HookCounterTwo;