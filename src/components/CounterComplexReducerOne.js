import React, { useReducer } from 'react';

const initicialState = 0

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initicialState
    default:
      return state
  }
}


const CounterComplexReducerOne = () => {
  const [count, dispatch] = useReducer(reducer, initicialState)
  const [countTwo, dispatchTwo] = useReducer(reducer, initicialState)

  return (
    <div>
        <h1>CounterComplexReducer one: {count}</h1>
        <button onClick={ () => dispatch('increment') }>Increment</button>
        <button onClick={ () => dispatch('decrement') }>Decrement</button>
        <button onClick={ () => dispatch('reset') }>Reset</button>
        <br />

        <h1>CounterComplexReducer two: {countTwo}</h1>
        <button onClick={ () => dispatchTwo('increment') }>Increment</button>
        <button onClick={ () => dispatchTwo('decrement') }>Decrement</button>
        <button onClick={ () => dispatchTwo('reset') }>Reset</button>
        <br />

    </div>
  );
};

export default CounterComplexReducerOne;