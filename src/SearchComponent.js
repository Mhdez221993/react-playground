import { useSelector } from "react-redux";

const SearchComponent = () => {
  const { noResult } = useSelector((state) => state.movies);
  return (
    <div data-testid="search-component" className="search">
      <input type="text" placeholder="Search for a movie..." />
      <div>{noResult}</div>
    </div>
  );
};

export default SearchComponent;
