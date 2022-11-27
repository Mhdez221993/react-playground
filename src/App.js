import './App.css';
import './components/appStyle.css';

import ContextParent from './components/context/ContextParent';
import React from 'react';

const App = () => {
    return (
      <div className="App">
        <ContextParent />
      </div>
    );
}

export default App;
