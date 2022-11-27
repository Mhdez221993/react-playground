import React, { useReducer } from 'react';

const initicialState = {
  first: 0,
  second: 10,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, first: state.first + action.value}
    case 'decrement':
      return {...state, first: state.first - action.value}

    case 'increment2':
      return {...state, second: state.second + action.value}
    case 'decrement2':
      return {...state, second: state.second - action.value}

    case 'reset':
      return initicialState
    default:
      return state
  }
}

const CounterComplexReducer = () => {
  const [count, dispatch] = useReducer(reducer, initicialState)

  return (
    <div>
        <h1>CounterComplexReducer: {count.first}</h1>
        <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
        <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement</button>
        <br />

        <h1>CounterComplexReducer: {count.second}</h1>
        <button onClick={() => dispatch({type: 'increment2', value: 2})}>Increment2</button>
        <button onClick={() => dispatch({type: 'decrement2', value: 2})}>Decrement2</button>
        <br />

        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  );
};

export default CounterComplexReducer;
