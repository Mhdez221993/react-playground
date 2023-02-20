import { fireEvent, render, screen } from "@testing-library/react";

import App from "./App";
import MovieComponent from "./MovieComponent";
import { Provider } from "react-redux";
import React from "react";
import SearchComponent from "./SearchComponent";
import store from "./store";

describe("MovieComponent", () => {
  it("render App component", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const title = screen.getByRole("heading", { level: 1, name: "Movie App" });
    expect(title).toBeInTheDocument();
  });

  it("render MovieComponent", () => {
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

  it("add a new movie", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const nameInput = screen.getByTestId("name-input");
    const ratingInput = screen.getByTestId("rating-input");
    const durationInput = screen.getByTestId("duration-input");
    const addMovie = screen.getByTestId("add-movie");

    fireEvent.change(nameInput, { target: { value: "Lord of the ring" } });
    fireEvent.change(ratingInput, { target: { value: "90" } });
    fireEvent.change(durationInput, { target: { value: "150" } });
    fireEvent.click(addMovie);

    const newMovie = screen.getByText("Lord of the ring");

    expect(newMovie).toBeInTheDocument();
  });
});
