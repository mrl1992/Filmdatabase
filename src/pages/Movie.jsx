const Movie = ({ title, poster }) => {
  return (
    <>
      <li>
        <h3>{title}</h3>
        <img src={poster}></img>
      </li>
    </>
  );
};

export default Movie;
