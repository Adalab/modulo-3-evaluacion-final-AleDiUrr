import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';
import wowMoviesApi from '../services/moviesApi';
import Header from './Header';
import MovieWowList from './MoviesWowList';
import FiltersWowMovies from './FiltersWowMovies';
import MovieWowDetail from './MovieWowDetail';

function App() {
  const [dataMovies, setDataMovies] = useState([]);
  const [filterNameMovie, setFilterNameMovie] = useState('');
  const [filterYearMovie, setFilterYearMovie] = useState('all');
  const [results, setResults] = useState(50);
  const [filterCharacter, setFilterCharacter] = useState('every');
  const [filterDirector, setFilterDirector] = useState('all');

  useEffect(() => {
    wowMoviesApi(results).then((dataClean) => {
      setDataMovies(
        dataClean.sort(function (a, b) {
          const wowA = a.movie.toUpperCase();
          const wowB = b.movie.toUpperCase();
          if (wowA < wowB) {
            return -1;
          }
          if (wowA > wowB) {
            return 1;
          }
          return 0;
        })
      );
    });
  }, [results]);

  const handleFilterName = (value) => {
    setFilterNameMovie(value);
  };

  const handleFilterYear = (value) => {
    setFilterYearMovie(value);
  };

  const handleResults = (value) => {
    setResults(value);
  };

  const handleFilterCharacter = (value) => {
    setFilterCharacter(value);
  };

  const handleFilterDirector = (value) => {
    setFilterDirector(value);
  };

  const filteredMovie = dataMovies
    .filter((director) => {
      return filterDirector === 'all'
        ? true
        : director.director === filterDirector;
    })

    .filter((character) => {
      return filterCharacter === 'every'
        ? true
        : character.character === filterCharacter;
    })

    .filter((movie) => {
      return movie.movie.toLowerCase().includes(filterNameMovie.toLowerCase());
    })

    .filter((year) => {
      return filterYearMovie === 'all'
        ? true
        : parseInt(year.year) === parseInt(filterYearMovie);
    });

  const yearMovies = () => {
    const moviesYear = dataMovies.map((movie) => movie.year);
    const theYearMovie = moviesYear.filter((year, index) => {
      return moviesYear.indexOf(year) === index;
    });
    return theYearMovie;
  };

  const characterMovies = () => {
    const movieCharacters = dataMovies.map((character) => character.character);
    const theCharacterMovie = movieCharacters.filter((character, index) => {
      return movieCharacters.indexOf(character) === index;
    });
    return theCharacterMovie;
  };

  const directorMovies = () => {
    const movieDirector = dataMovies.map((director) => director.director);
    const theDirectorMovie = movieDirector.filter((director, index) => {
      return movieDirector.indexOf(director) === index;
    });
    return theDirectorMovie;
  };

  const { pathname } = useLocation();
  const dataPath = matchPath('/movie/:movieId', pathname);

  const movieId = dataPath !== null ? dataPath.params.movieId : null;
  const wowMovie = dataMovies.find((movie) => movie.id === movieId);

  const handleReset = () => {
    setFilterNameMovie('');
    setFilterYearMovie('all');
    setResults(50);
    setFilterDirector('all');
  };
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FiltersWowMovies
                  handleFilterName={handleFilterName}
                  handleFilterYear={handleFilterYear}
                  handleResults={handleResults}
                  handleFilterCharacter={handleFilterCharacter}
                  handleFilterDirector={handleFilterDirector}
                  filterNameMovie={filterNameMovie}
                  filterYearMovie={filterYearMovie}
                  filterCharacter={filterCharacter}
                  filterDirector={filterDirector}
                  results={results}
                  years={yearMovies()}
                  characters={characterMovies()}
                  directors={directorMovies()}
                  reset={handleReset}
                />

                <MovieWowList
                  movies={filteredMovie}
                  filterNameMovie={filterNameMovie}
                />
              </>
            }
          />
          <Route
            path="/movie/:movieId"
            element={<MovieWowDetail movie={wowMovie} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
