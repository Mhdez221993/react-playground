import App from "./App";
import MovieComponent from "./MovieComponent";
import React from "react";
import SearchComponent from "./SearchComponent";
import { render } from "@testing-library/react";

describe("MovieComponent", () => {
  it("render App component", () => {
    const { getByRole } = render(<App />);
    expect(getByRole("heading", { level: 1, name: "Movie App" }));
  });

  it("adds a movie to the app", () => {
    const { getByTestId } = render(<MovieComponent />);
    expect(getByTestId("movie-component")).toBeInTheDocument();
  });

  it("render the search component", () => {
    const { getByTestId } = render(<SearchComponent />);
    expect(getByTestId("search-component")).toBeInTheDocument();
  });
});
