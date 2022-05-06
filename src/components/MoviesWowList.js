import MovieCard from './MovieWowCard';
import '../styles/components/MovieWowList.scss';

const MoviesWowList = (props) => {
  const movieElement = props.movies.map((movie) => {
    return (
      <li key={movie.id} className="card__text">
        <MovieCard movie={movie} />
      </li>
    );
  });
  return (
    <section>
      <ul className="card__list">{movieElement}</ul>
    </section>
  );
};

export default MoviesWowList;
