import { Link } from 'react-router-dom';

const MovieWowCard = (props) => {
  return (
    <Link to={`/movie/${props.movie.id}`}>
      <article className="card__text">
        <img
          src={props.movie.poster}
          alt={props.movie.movie}
          width="200 px"
          height="200 px"
        />
        <h4>{props.movie.movie}</h4>
        <p>{props.movie.line}</p>
        <p>{props.movie.year}</p>
      </article>
    </Link>
  );
};

export default MovieWowCard;
