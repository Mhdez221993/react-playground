const MovieComponent = () => {
  return (
    <div data-testid="movie-component" className="movies">
      <form className="form">
        <div className="form-control">
          <label htmlFor="name">Movie Name</label>
          <br />
          <input type="text" id="name" />
        </div>

        <div className="form-control">
          <label htmlFor="rating">Raiting</label>
          <br />
          <input type="text" id="rating" />
        </div>

        <div className="form-control">
          <label htmlFor="duration">Duration</label>
          <br />
          <input type="text" id="duration" />
        </div>

        <button className="add-movie" type="submit">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default MovieComponent;
