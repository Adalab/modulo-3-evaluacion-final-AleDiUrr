import NameMovieFilter from './NameMovieFilter';
import YearMovieFilter from './YearMovieFilter';
import '../styles/components/FiltersWowMovies.scss';

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
          />
        </div>
      </form>
    </section>
  );
};

export default FiltersWowMovies;
