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
        <CounterTwo
          render={(count, incrementCount) => (
              <ClickCounterTwo
                count={count}
                incrementCount={incrementCount}
          />)}/>

        <br />

        <CounterTwo
          render={(count, incrementCount) => (
              <HoverCounterTwo
                count={count}
                incrementCount={incrementCount}
          />)}/>
      </div>
    );
  }
}

export default App;
