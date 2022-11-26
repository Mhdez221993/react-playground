import './App.css';
import './components/appStyle.css';

import HookCounterOne from './components/HookCounterOne';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HookCounterOne />
      </div>
    );
  }
}

export default App;
