import NameMovieFilter from './NameMovieFilter';
import YearMovieFilter from './YearMovieFilter';
import '../styles/components/FiltersWowMovies.scss';
import Reset from './Reset';

const FiltersWowMovies = (props) => {
  return (
    <section>
      <form className="filter" onSubmit={(event) => event.preventDefault()}>
        <div>
          <NameMovieFilter
            handleFilterName={props.handleFilterName}
            filterNameMovie={props.filterNameMovie}
          />
        </div>
        <div>
          <YearMovieFilter
            handleFilterYear={props.handleFilterYear}
            years={props.years}
            filterYearMovie={props.filterYearMovie}
          />
        </div>
        <div>
          <Reset reset={props.reset} />
        </div>
      </form>
    </section>
  );
};

export default FiltersWowMovies;
