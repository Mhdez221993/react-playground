import './App.css';
import './components/appStyle.css';

import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ClickCounter />
        <HoverCounter />
      </div>
    );
  }
}

export default App;
