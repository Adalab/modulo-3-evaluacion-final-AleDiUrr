import NameMovieFilter from './NameMovieFilter';
import YearMovieFilter from './YearMovieFilter';
import '../styles/components/FiltersWowMovies.scss';
import Reset from './Reset';
import Results from './Results';

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

        <Results handleResults={props.handleResults} results={props.results} />

        <Reset reset={props.reset} />
      </form>
    </section>
  );
};

export default FiltersWowMovies;
