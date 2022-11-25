import './App.css';

import EvenBind from './components/EvenBind';
import React from 'react';

// import ClassClick from './components/ClassClick';
// import FucntionClick from './components/FucntionClick';

// import Counter from './components/Counter';
// import Greet from './components/Greet';
// import Message from './components/Message';
// import Welcome from './components/Welcome';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Hello /> */}

       {/* <Greet name="Greeting componenet" >
          <p>Children props</p>
       </Greet> */}

       {/* <Welcome name="Welcome component">
        <p>Children props</p>
       </Welcome> */}

       {/* <Message /> */}

       {/* <Counter /> */}

       {/* <FucntionClick />

       <ClassClick /> */}

       <EvenBind />
      </div>
    );
  }
}

export default App;
