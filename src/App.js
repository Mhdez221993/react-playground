import './App.css';
import './components/appStyle.css';

import { ChildA } from './components/context/ContextChildrend';
import ContextParent from './components/context/ContextParent';
import React from 'react';

const App = () => {
    return (
      <div className="App">
        <ContextParent>
          <ChildA />
        </ContextParent>
      </div>
    );
}

export default App;
