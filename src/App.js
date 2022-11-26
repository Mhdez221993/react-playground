import './App.css';
import './components/appStyle.css';

import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ClickCounter name='Doe' />
        <br />
        <br />
        <HoverCounter name='Peter' />
      </div>
    );
  }
}

export default App;
