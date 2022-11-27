import './App.css';
import './components/appStyle.css';

import CounterComplexReducerOne from './components/CounterComplexReducerOne';
import React from 'react';

export const UserContext  = React.createContext()
export const ChannelContext = React.createContext()
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CounterComplexReducerOne />
      </div>
    );
  }
}

export default App;
