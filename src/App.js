import './App.css';
import './components/appStyle.css';

import ComponentC from './components/ComponentC';
import React from 'react';
import { UserProvider } from './components/userContext';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UserProvider value='Doe'>
          <ComponentC />
        </UserProvider>
      </div>
    );
  }
}

export default App;
