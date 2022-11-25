import './App.css';

import Message from './components/Message';
// import Greet from './components/Greet';
import React from 'react';

// import Welcome from './components/Welcome';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Hello /> */}
       {/* <Greet name="Greeting componenet" >
          <p>Children props</p>
       </Greet>

       <Welcome name="Welcome component">
        <p>Children props</p>
       </Welcome> */}

       <Message />
      </div>
    );
  }
}

export default App;
