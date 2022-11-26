import './App.css';
import './components/appStyle.css';

import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ClickCounterTwo />
        <br />
        <br />
        <HoverCounterTwo />
      </div>
    );
  }
}

export default App;
