import './App.css';
import './components/appStyle.css';

import CounterComplexReducer from './components/CounterComplexReducer';
import React from 'react';

export const UserContext  = React.createContext()
export const ChannelContext = React.createContext()
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CounterComplexReducer />
      </div>
    );
  }
}

export default App;
