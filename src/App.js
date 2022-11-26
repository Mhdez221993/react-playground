import './App.css';
import './components/appStyle.css';

import PostForm from './components/PostForm';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PostForm />
      </div>
    );
  }
}

export default App;
