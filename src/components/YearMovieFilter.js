import '../styles/components/YearMovieFilter.scss';

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
      <select
        className="filter__year"
        name="searchYear"
        value={props.filterYearMovie}
        onChange={handleSelect}
      >
        <option className="filter__year" value="all">
          Year
        </option>
        {renderMovieYear()}
      </select>
    </>
  );
};
export default YearMovieFilter;
