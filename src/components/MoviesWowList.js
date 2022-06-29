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
      <div className="movie-no-results">
        <span className="movie-no-results__wrapper">
          <h2 className="wrapper__title"> Wooooooooow!</h2>
          <p className="wrapper__subtitle">
            No results for:{' '}
            <strong className="wrapper__subtitle">
              {props.filterNameMovie}
            </strong>
          </p>
        </span>
      </div>
    );
  };
  return (
    <section>
      <ul className="card__list">{movieElement()}</ul>
    </section>
  );
};
export default MoviesWowList;
