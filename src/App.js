import './App.css';
import './components/appStyle.css';

import ParentComp from './components/ParentComp';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ParentComp />
      </div>
    );
  }
}

export default App;
