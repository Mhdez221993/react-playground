import './App.css';
import './components/appStyle.css';

import HookMouse from './components/HookMouse';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HookMouse />
      </div>
    );
  }
}

export default App;
