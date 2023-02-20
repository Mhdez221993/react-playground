import { useDispatch, useSelector } from "react-redux";

import { searchMovie } from "./store";
import { useState } from "react";

const SearchComponent = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState("");
  const { noResult, movies, search } = useSelector((state) => state.movies);

  const handleSearch = (e) => {
    setState(e.target.value);

    if (e.target.value.length > 3) {
      dispatch(searchMovie(state));
    }
  };

  let displayResult = state.length > 3 ? search : movies;
  let displayNoResult = movies && movies.length ? noResult : "";

  return (
    <div data-testid="search-component" className="search">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={state}
        onChange={handleSearch}
      />
      <ul>
        {displayNoResult && displayResult.length
          ? displayResult.map((movie) => (
              <li
                style={{
                  marginBottom: "40px",
                  backgroundColor: "rgb(191, 197, 202)",
                  padding: "10px",
                  borderRadius: "5px",
                }}
                key={movie.name}
              >
                <h3>{movie.name}</h3>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Rating: {movie.rating}</span>
                  <span>Duration: {movie.duration}</span>
                </div>
              </li>
            ))
          : displayNoResult}
      </ul>
    </div>
  );
};

export default SearchComponent;
