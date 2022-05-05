import MovieCard from './MovieCard';

const MovieWowList = (props) => {
  const movieElement = props.movies.map((movie) => {
    return (
      <li key={props.movies.id}>
        <MovieCard movie={movie} />
      </li>
    );
  });
  return (
    <section>
      <ul>{movieElement}</ul>
    </section>
  );
};

export default MovieWowList;
