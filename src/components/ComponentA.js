import React, { useContext } from 'react';

import { CountContent } from '../App';

const ComponentA = () => {
  const countContex = useContext(CountContent)

  return (
    <div>
      <h1>ComponentA {countContex.count}</h1>
      <button onClick={ () => countContex.dispatch('increment') }>Increment</button>
      <button onClick={ () => countContex.dispatch('decrement') }>Decrement</button>
      <button onClick={ () => countContex.dispatch('reset') }>Reset</button>
    </div>
  );
};

export default ComponentA
