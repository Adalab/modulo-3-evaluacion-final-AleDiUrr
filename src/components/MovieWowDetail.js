const MovieWowDetail = (props) => {
  return (
    <section>
      <article>
        <img
          src={props.movie.poster}
          alt={props.movie.movie}
          width="200"
          height="200"
        />
        <h4>{props.movie.movie}</h4>
        <p>{props.movie.line}</p>
        <p>{props.movie.year}</p>
        <a href={props.movie.audio} targe="blank" alt="quote">
          Here is the wow
        </a>
      </article>
    </section>
  );
};
export default MovieWowDetail;
