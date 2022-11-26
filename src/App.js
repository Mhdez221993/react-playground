import './App.css';
import './components/appStyle.css';

import HookCounterThree from './components/HookCounterThree';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HookCounterThree />
      </div>
    );
  }
}

export default App;
