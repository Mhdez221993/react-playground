import './App.css';
import './components/appStyle.css';

import React, { createContext, useReducer } from 'react';

import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

export const CountContent  = createContext()


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

const App = () => {
  const [count, dispatch] = useReducer(reducer, initicialState)

    return (
      <div className="App">
      <CountContent.Provider value={{count, dispatch}}>
        <div>Count: {count}</div>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContent.Provider>
      </div>
    );
}

export default App;
