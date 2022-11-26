import './App.css';
import './components/appStyle.css';

import DataFetching from './components/DataFetching';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <DataFetching />
      </div>
    );
  }
}

export default App;
