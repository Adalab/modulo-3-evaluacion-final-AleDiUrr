import { Link } from 'react-router-dom';

const MovieWowCard = (props) => {
  return (
    <Link to={`/movie/${props.movie.id}`}>
      <article className="card__text">
        <img
          className="card__img"
          src={props.movie.poster}
          alt={props.movie.movie}
        />
        <h4 className="card__name">{props.movie.movie}</h4>
        <p>
          -<i>{props.movie.line}</i>{' '}
        </p>
        <p>{props.movie.year}</p>
      </article>
    </Link>
  );
};

export default MovieWowCard;
