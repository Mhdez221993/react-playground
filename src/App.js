import './App.css';
import './components/appStyle.css';

import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Hero heroName='Batmat' />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName='Joker' />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
