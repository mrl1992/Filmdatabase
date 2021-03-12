import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { request } from "../utils/request";
import Movies from "./Movies";

const Search = () => {
  const [data, setData] = useState([]);
  const [querry, setQuerry] = useState("star wars");

  const fetchData = async () => {
    try {
      const reqData = await request(
        `${process.env.API_URL}/?s=${querry}&t=movies&apikey=27c4cff5&`
      );
      const { Search } = reqData;
      setData(Search);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [querry]);

  const updQuerry = (e) => {
    setQuerry(e.target.value);
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
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
      <Movies data={data} />
    </>
  );
};

export default Search;
