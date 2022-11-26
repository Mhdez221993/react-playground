import './App.css';
import './components/appStyle.css';

import HookCounterFour from './components/HookCounterFour';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HookCounterFour />
      </div>
    );
  }
}

export default App;
