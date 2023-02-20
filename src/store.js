import { configureStore, createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: { movies: [], search: [], noResult: "No movie found!" },
  reducers: {
    addMovie: (state, action) => state.movies.push(action.payload),
    searchMovie: (state, action) => state.search.push(action.payload),
  },
});

export const { addMovie, searchMovie } = movieSlice.actions;

const store = configureStore({
  reducer: {
    movies: movieSlice.reducer,
  },
});

export default store;
