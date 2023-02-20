import "./App.css";

import MovieComponent from "./MovieComponent";
import SearchComponent from "./SearchComponent";

function App() {
  return (
    <div className="app">
      <h1 className="title">Movie App</h1>
      <MovieComponent />
      <SearchComponent />
    </div>
  );
}

export default App;
