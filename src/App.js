import './App.css';
import './components/appStyle.css';

import HookCounter from './components/HookCounter';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <ClassCounter /> */}
        <HookCounter />
      </div>
    );
  }
}

export default App;
