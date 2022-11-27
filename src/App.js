import './App.css';
import './components/appStyle.css';

import ContexComponentC from './components/ContexComponentC';
import React from 'react';

export const UserContext  = React.createContext()
export const ChannelContext = React.createContext()
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UserContext.Provider value={'Doe'}>
          <ChannelContext.Provider value={'CodeEvolution'}>
            <ContexComponentC />
          </ChannelContext.Provider>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
