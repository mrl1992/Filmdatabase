import { useState } from "react";
import { request } from "../utils/request";

const Search = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    const reqData = request(`${process.env.API_URL}`);
    console.log(reqData);
  };
  {
    /*
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchMovie = (e) => {
    e.preventDefault();
  };
*/
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search...." id="search" />
        <button type="submit"> Search</button>
      </form>
    </>
  );
};

export default Search;
