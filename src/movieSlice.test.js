import { addMovie, reducer, searchMovie } from "./store";

describe("movieSlice reducer", () => {
  it("should handle the initial state", () => {
    const initialState = {
      movies: [],
      search: [],
      noResult: "No movie found!",
    };
    const state = reducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it("should handle adding a new movie", () => {
    const initialState = {
      movies: [],
      search: [],
      noResult: "No movie found!",
    };
    const action = addMovie({ name: "The Lord of the Rings" });
    const state = reducer(initialState, action);
    expect(state.movies).toHaveLength(1);
    expect(state.movies[0].name).toBe("The Lord of the Rings");
  });

  it("should handle searching for a movie", () => {
    const initialState = {
      movies: [
        { name: "The Lord of the Rings" },
        { name: "Harry Potter" },
        { name: "Star Wars" },
      ],
      search: [],
      noResult: "No movie found!",
    };
    const action = searchMovie("lord");
    const state = reducer(initialState, action);
    expect(state.search).toHaveLength(1);
    expect(state.search[0].name).toBe("The Lord of the Rings");
  });
});
