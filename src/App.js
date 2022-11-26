import './App.css';
import './components/appStyle.css';

import IntervalHookCounter from './components/IntervalHookCounter';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <IntervalHookCounter />
      </div>
    );
  }
}

export default App;
