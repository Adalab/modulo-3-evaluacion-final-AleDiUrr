import { Link } from 'react-router-dom';
import '../styles/components/MovieWowList.scss';
import '../styles/components/MovieWowDetail.scss';

const MovieWowDetail = (props) => {
  return (
    <section>
      <article className="detail__card">
        <img
          className="detail__img"
          src={props.movie.poster}
          alt={props.movie.movie}
        />
        <h4 className="detail__name">
          Name: <strong>{props.movie.movie}</strong>
        </h4>
        <p className="detail__quote"> Quote: {props.movie.line}</p>
        <p>Director: {props.movie.director}</p>
        <a
          className="detail__name"
          href={props.movie.audio}
          target="blank"
          rel="noopener noreferrer"
        >
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
