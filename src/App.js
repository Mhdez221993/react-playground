import './App.css';
import './components/appStyle.css';

import Portal from './components/Portal';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Portal />
      </div>
    );
  }
}

export default App;
