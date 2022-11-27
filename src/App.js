import './App.css';
import './components/appStyle.css';

import React, { createContext } from 'react';

import ParentComponentTwo from './components/ParentComponentTwo';

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
  // const [count, dispatch] = useReducer(reducer, initicialState)

    return (
      <div className="App">
        <ParentComponentTwo />
      </div>
    );
}

export default App;
