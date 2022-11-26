import './App.css';
import './components/appStyle.css';

import ForwardingRefParentInput from './components/ForwardingRefParentInput';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ForwardingRefParentInput />
      </div>
    );
  }
}

export default App;
