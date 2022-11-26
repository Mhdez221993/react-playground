import './App.css';
import './components/appStyle.css';

import ClassCounterOne from './components/ClassCounterOne';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <HookCounterOne /> */}
        <ClassCounterOne />
      </div>
    );
  }
}

export default App;
