import NameMovieFilter from './NameMovieFilter';

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
      </form>
    </section>
  );
};

export default FiltersWowMovies;
