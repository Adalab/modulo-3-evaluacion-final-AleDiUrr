import NameMovieFilter from './NameMovieFilter';
import YearMovieFilter from './YearMovieFilter';
import '../styles/components/FiltersWowMovies.scss';
import Reset from './Reset';

const FiltersWowMovies = (props) => {
  return (
    <section>
      <form className="filter" onSubmit={(event) => event.preventDefault()}>
        <NameMovieFilter
          handleFilterName={props.handleFilterName}
          filterNameMovie={props.filterNameMovie}
        />

        <YearMovieFilter
          handleFilterYear={props.handleFilterYear}
          years={props.years}
          filterYearMovie={props.filterYearMovie}
        />

        <Reset reset={props.reset} />
      </form>
    </section>
  );
};

export default FiltersWowMovies;
