import NameMovieFilter from './NameMovieFilter';
import YearMovieFilter from './YearMovieFilter';
import '../styles/components/FiltersWowMovies.scss';
import Reset from './Reset';
import Results from './Results';
import CharacterFilter from './CharacterFilter';
import DirectorMovieFilter from './DirectorFilter';

const FiltersWowMovies = (props) => {
  return (
    <section>
      <form
        className="form__filter"
        onSubmit={(event) => event.preventDefault()}
      >
        <NameMovieFilter
          handleFilterName={props.handleFilterName}
          filterNameMovie={props.filterNameMovie}
        />

        <DirectorMovieFilter
          handleFilterDirector={props.handleFilterDirector}
          directors={props.directors}
          filterDirector={props.filterDirector}
        />

        <CharacterFilter
          handleFilterCharacter={props.handleFilterCharacter}
          characters={props.characters}
          filterCharacter={props.filterCharacter}
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
