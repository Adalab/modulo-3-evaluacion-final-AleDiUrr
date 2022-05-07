const YearMovieFilter = (props) => {
  const handleSelect = (e) => {
    props.handleFilterYear(e.target.value);
  };
  const renderMovieYear = () => {
    return props.years.map((year, i) => {
      return (
        <option key={i} value={year}>
          {year}
        </option>
      );
    });
  };

  return (
    <>
      <label className="filter__text">"Wow" by the year of the movie</label>
      <select name="searchYear" /*value={props.years}*/ onChange={handleSelect}>
        <option value="all">All years</option>
        {renderMovieYear()}
      </select>
    </>
  );
};
export default YearMovieFilter;
