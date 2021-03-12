import { FaSearch } from "react-icons/fa";

const Search = ({ handleSubmit, updQuerry, querry }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={updQuerry}
          type="text"
          placeholder="Search...."
          id="search"
          value={querry}
        />
        <button type="submit">
          <FaSearch aria-label="search" />
        </button>
      </form>
    </>
  );
};

export default Search;
