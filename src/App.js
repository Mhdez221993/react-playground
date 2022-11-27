import './App.css';
import './components/appStyle.css';

import CounterFour from './components/CounterFour';
import CounterOne from './components/CounterOne';
import React from 'react';

const App = () => {
    return (
      <div className="App">
        <CounterOne />
        <CounterFour />
      </div>
    );
}

export default App;
