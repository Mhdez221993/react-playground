import './App.css';

import Greet from './components/Greet';
import React from 'react';
import Welcome from './components/Welcome';

class App extends React.Component {
  render() {
    return (
      <div className="App">
       <Greet />
       <Welcome />
      </div>
    );
  }
}

export default App;
