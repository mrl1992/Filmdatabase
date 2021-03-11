import { useState } from "react";
import { request } from "../utils/request";

const Search = () => {
  const [data, setData] = useState([]);
  const [querry, setQuerry] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    try {
      const reqData = await request(
        `${process.env.API_URL}/?s=${querry}&apikey=27c4cff5&`
      );
      const { Search } = reqData;
      setData(Search);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updQuerry = (e) => {
    setQuerry(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={updQuerry}
          type="text"
          placeholder="Search...."
          id="search"
        />
        <button type="submit">Search</button>
      </form>

      {data?.map > 0 ? (
        <ul>
          {data.map((movies) => (
            <li key={movies.imdbID}>{movies.Titl}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default Search;
