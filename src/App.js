import './App.css';
import './components/appStyle.css';

import Inline from './components/Inline';
import React from 'react';
import style from './components/appStyle.module.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <h1 className="error">Error</h1>
      <h1 className={style.success}>Success</h1>

        <Inline />

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

       {/* <EvenBind /> */}

       {/* <ParentComponent /> */}

       {/* <UserGreeting /> */}

       {/* <NameList /> */}

       {/* <Stylesheet primary='primary' /> */}

      </div>
    );
  }
}

export default App;
