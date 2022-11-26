import './App.css';
import './components/appStyle.css';

import ClickCounterTwo from './components/ClickCounterTwo';
import CounterTwo from './components/CounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CounterTwo>
          {(count, incrementCount) => (
              <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </CounterTwo>

        <br />

        <CounterTwo>
          {(count, incrementCount) => (
              <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </CounterTwo>
      </div>
    );
  }
}

export default App;
