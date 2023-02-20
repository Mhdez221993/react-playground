import { render, screen } from "@testing-library/react";

import App from "./App";
import MovieComponent from "./MovieComponent";
import { Provider } from "react-redux";
import React from "react";
import SearchComponent from "./SearchComponent";
import configureMockStore from "redux-mock-store";

describe("MovieComponent", () => {
  const initialState = {
    movies: [{ name: "Lord of the Rings", rating: 30, duration: 80 }],
    search: [],
    noResult: "No movie found!",
  };
  const mockStore = configureMockStore([]);
  let store = mockStore(initialState);

  it("render App component", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const title = screen.getByRole("heading", { level: 1, name: "Movie App" });
    expect(title).toBeInTheDocument();
  });

  it("render app component", () => {
    render(
      <Provider store={store}>
        <MovieComponent />
      </Provider>
    );
    const movie = screen.getByTestId("movie-component");
    expect(movie).toBeInTheDocument();
  });

  it("render the search component", () => {
    render(
      <Provider store={store}>
        <SearchComponent />
      </Provider>
    );
    const search = screen.getByTestId("search-component");
    expect(search).toBeInTheDocument();
  });
});
