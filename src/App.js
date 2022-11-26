import './App.css';
import './components/appStyle.css';

import HookCounterTwo from './components/HookCounterTwo';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HookCounterTwo />
      </div>
    );
  }
}

export default App;
