import MovieCard from './MovieWowCard';
import '../styles/components/MovieWowList.scss';
import '../styles/core/Reset.scss';

const MoviesWowList = (props) => {
  const movieElement = () => {
    if (props.movies.length > 0) {
      return props.movies.map((movie) => {
        return (
          <li key={movie.id} className="card__text">
            <MovieCard movie={movie} />
          </li>
        );
      });
    }

    return (
      <span className="card__message">
        There is no wow or movie that matches this
        <strong> {props.filterNameMovie}</strong> :(
      </span>
    );
  };
  return (
    <section>
      <ul className="card__list">{movieElement()}</ul>
    </section>
  );
};
export default MoviesWowList;
