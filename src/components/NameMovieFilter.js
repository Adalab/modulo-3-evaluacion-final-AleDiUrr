const NameMovieFilter = (props) => {
  const handleInput = (e) => {
    props.handleFilterName(e.target.value);
  };

  return (
    <>
      <label className="filter__text">"Wow" by the name of the movie</label>
      <input
        type="text"
        name="name"
        id="name"
        value={props.filterNameMovie}
        onChange={handleInput}
      />
    </>
  );
};

export default NameMovieFilter;
