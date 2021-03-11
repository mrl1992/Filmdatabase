import { useState } from "react";

const Movie = () => {
  const [movie, setMovie] = useState([]);
  return (
    <>
      <div className="movies">
        <h2>movie.Title</h2>
      </div>
    </>
  );
};

export default Movie;
