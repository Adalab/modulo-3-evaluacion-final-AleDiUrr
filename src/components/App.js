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

  const filteredMovie = dataMovies

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

  const { pathname } = useLocation();
  const dataPath = matchPath('/movie/:movieId', pathname);

  const movieId = dataPath !== null ? dataPath.params.movieId : null;
  const wowMovie = dataMovies.find((movie) => movie.id === movieId);

  const handleReset = () => {
    setFilterNameMovie('');
    setFilterYearMovie('all');
    setResults(50);
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
                  filterNameMovie={filterNameMovie}
                  filterYearMovie={filterYearMovie}
                  results={results}
                  years={yearMovies()}
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
