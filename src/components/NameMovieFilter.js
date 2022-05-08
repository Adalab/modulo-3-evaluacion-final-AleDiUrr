import '../styles/components/NameMovieFilter.scss';

const NameMovieFilter = (props) => {
  const handleInput = (e) => {
    props.handleFilterName(e.target.value);
  };

  return (
    <>
      <input
        className="filter__name"
        type="text"
        name="name"
        id="name"
        placeholder="Name of the movie"
        value={props.filterNameMovie}
        onChange={handleInput}
      />
    </>
  );
};

export default NameMovieFilter;
