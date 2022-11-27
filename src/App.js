import './App.css';
import './components/appStyle.css';

import GrandParent from './components/Parent Child/GrandParent';
import React from 'react';

const App = () => {
    return (
      <div className="App">
        <GrandParent />
      </div>
    );
}

export default App;
