import './App.css';
import './components/appStyle.css';

import MouseContainer from './components/MouseContainer';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MouseContainer />
      </div>
    );
  }
}

export default App;
