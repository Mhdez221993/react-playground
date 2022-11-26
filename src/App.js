import './App.css';
import './components/appStyle.css';

import FocusInput from './components/FocusInput';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FocusInput />
      </div>
    );
  }
}

export default App;
