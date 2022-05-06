import { Link } from 'react-router-dom';

const MovieWowDetail = (props) => {
  return (
    <section>
      <article className="card__text">
        <img
          src={props.movie.poster}
          alt={props.movie.movie}
          width="200"
          height="200"
        />
        <h4>{props.movie.movie}</h4>
        <p>{props.movie.line}</p>
        <p>{props.movie.director}</p>
        <a href={props.movie.audio} target="blank" rel="noopener noreferrer">
          Here is the wow
        </a>
        <Link to={'/'}>
          <button type="button">Woowbaaack</button>
        </Link>
      </article>
    </section>
  );
};
export default MovieWowDetail;
