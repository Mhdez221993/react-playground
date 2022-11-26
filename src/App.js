import './App.css';
import './components/appStyle.css';

import PostList from './components/PostList';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PostList />
      </div>
    );
  }
}

export default App;
