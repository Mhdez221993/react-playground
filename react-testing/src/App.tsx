import './App.css';

import { AppProviders } from './providers/app-providers';
import Counter from './components/counter/counter';

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Counter />
      </div>
    </AppProviders>
  );
}

export default App;
