import './App.css';
import './components/appStyle.css';

import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import React from 'react';

const App = () => {
    return (
      <div className="App">
        <DocTitleOne />
        <DocTitleTwo />
      </div>
    );
}

export default App;
