import NameMovieFilter from './NameMovieFilter';
import YearMovieFilter from './YearMovieFilter';

const FiltersWowMovies = (props) => {
  return (
    <section>
      <form onSubmit={(event) => event.preventDefault()}>
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
          />
        </div>
      </form>
    </section>
  );
};

export default FiltersWowMovies;
