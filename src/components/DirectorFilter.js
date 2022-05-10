const DirectorMovieFilter = (props) => {
  const handleDirector = (event) => {
    props.handleFilterDirector(event.target.value);
  };
  const renderDirectors = () => {
    return props.directors.map((director, i) => {
      return (
        <option key={i} value={director}>
          {director}
        </option>
      );
    });
  };
  return (
    <>
      <select
        className="filter__year div2"
        value={props.filterDirector}
        onChange={handleDirector}
      >
        <option className="filter__year" value="all">
          Director
        </option>
        {renderDirectors()}
      </select>
    </>
  );
};
export default DirectorMovieFilter;
