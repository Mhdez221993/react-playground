import React, { useReducer } from 'react';

const initicialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment': return state + 1
    case 'decrement': return state - 1
    case 'reset': return initicialState
    default: return state
  }
}

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initicialState)

  console.log('UseReducer render');
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  );
};

export default UseReducer
