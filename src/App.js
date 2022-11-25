import './App.css';

// import Counter from './components/Counter';
import Greet from './components/Greet';
// import Message from './components/Message';
import React from 'react';
import Welcome from './components/Welcome';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Hello /> */}

       <Greet name="Greeting componenet" >
          <p>Children props</p>
       </Greet>

       <Welcome name="Welcome component">
        <p>Children props</p>
       </Welcome>

       {/* <Message /> */}

       {/* <Counter /> */}
      </div>
    );
  }
}

export default App;
