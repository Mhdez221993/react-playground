import { addMovie } from "./store";
import { useDispatch } from "react-redux";
import { useState } from "react";

const initialState = { name: "", rating: "", duration: "" };

const MovieComponent = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);

  const handleState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.name && state.duration && state.rating) {
      state.duration = Number(state.duration);
      dispatch(addMovie(state));
      setState(initialState);
    }
  };

  return (
    <div data-testid="movie-component" className="movies">
      <form className="form">
        <div className="form-control">
          <label htmlFor="name">Movie Name</label>
          <br />
          <input
            type="text"
            id="name"
            value={state.name}
            name="name"
            data-testid="name-input"
            onChange={handleState}
          />
        </div>

        <div className="form-control">
          <label htmlFor="rating">Raiting</label>
          <br />
          <input
            type="text"
            id="rating"
            value={state.rating}
            name="rating"
            data-testid="rating-input"
            onChange={handleState}
          />
        </div>

        <div className="form-control">
          <label htmlFor="duration">Duration</label>
          <br />
          <input
            type="text"
            id="duration"
            value={state.duration}
            name="duration"
            data-testid="duration-input"
            onChange={handleState}
          />
        </div>

        <button
          className="add-movie"
          type="submit"
          data-testid="add-movie"
          onClick={handleSubmit}
        >
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default MovieComponent;
