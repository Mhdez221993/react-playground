import './App.css';
import './components/appStyle.css';

import CounterOne from './components/CounterOne';
import React from 'react';

export const UserContext  = React.createContext()
export const ChannelContext = React.createContext()
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CounterOne />
      </div>
    );
  }
}

export default App;
