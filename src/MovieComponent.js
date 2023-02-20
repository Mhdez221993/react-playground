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
    state.duration = Number(state.duration);
    dispatch(addMovie(state));
    setState(initialState);
  };

  return (
    <div data-testid="movie-component" className="movies">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Movie Name</label>
          <br />
          <input
            type="text"
            id="name"
            value={state.name}
            name="name"
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
            onChange={handleState}
          />
        </div>

        <button className="add-movie" type="submit">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default MovieComponent;
