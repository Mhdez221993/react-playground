import { configureStore, createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: { movies: [], search: [], noResult: "No movie found!" },
  reducers: {
    addMovie(state, action) {
      state.movies.push(action.payload);
    },
    searchMovie(state, action) {
      const searchTerm = action.payload.toLowerCase();
      state.search = state.movies.filter((movie) =>
        movie.name.toLowerCase().includes(searchTerm)
      );
    },
  },
});

export const { addMovie, searchMovie } = movieSlice.actions;
export const { reducer } = movieSlice;

const store = configureStore({
  reducer: {
    movies: movieSlice.reducer,
  },
});

export default store;
