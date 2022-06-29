import { Link } from 'react-router-dom';
import '../styles/components/MovieWowList.scss';
import '../styles/components/MovieWowDetail.scss';
import ButtonPlayWow from './ButtonPlayWow';

const MovieWowDetail = (props) => {
  return (
    <section className="detail__wrapper">
      <article className="detail__card">
        <img
          className="detail__img"
          src={props.movie.poster}
          alt={props.movie.movie}
        />
        <h4 className="detail__name">
          <strong>Film title:</strong> {props.movie.movie}
        </h4>
        <p className="detail__quote">
          <strong>Quote:</strong>
          <i>{props.movie.line}</i>
        </p>
        <p>
          <strong>Directed by:</strong> {props.movie.director}
        </p>
        <ButtonPlayWow audio={props.movie.audio} />
        <Link to={'/'}>
          <button type="button">Woowbaaack</button>
        </Link>
      </article>
    </section>
  );
};
export default MovieWowDetail;
