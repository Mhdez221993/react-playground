import './App.css';
import './components/appStyle.css';

import React from 'react';
import RefsDemo from './components/RefsDemo';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <RefsDemo />
      </div>
    );
  }
}

export default App;
