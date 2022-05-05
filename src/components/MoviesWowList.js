import MovieCard from './MovieWowCard';
import '../styles/components/MovieWowList.scss';

const MoviesWowList = (props) => {
  const movieElement = props.movies.map((movie, index) => {
    return (
      <li key={index} className="card__text">
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
