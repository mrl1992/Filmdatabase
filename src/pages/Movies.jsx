import Movie from "./Movie";

const Movies = ({ movies, data }) => {
  return (
    <>
      <div>
        {data?.length > 0 ? (
          <div className="grid">
            {data.map((movies) => (
              <ul key={movies.imdbID}>
                <Movie poster={movies.Poster} title={movies.Title} />
              </ul>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};
export default Movies;
