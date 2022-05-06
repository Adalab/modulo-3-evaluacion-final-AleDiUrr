import { useState, useEffect } from 'react';
import wowMoviesApi from '../services/moviesApi';
import wowMoviesLs from '../services/localStorage';
import MovieWowList from './MoviesWowList';
import FiltersWowMovies from './FiltersWowMovies';

function App() {
  const [dataMovies, setDataMovies] = useState([]);
  const [filterNameMovie, setFilterNameMovie] = useState('');
  const [filterYearMovie, setFilterYearMovie] = useState([]);

  useEffect(() => {
    wowMoviesApi().then((dataClean) => {
      setDataMovies(dataClean);
    });
  }, []);

  // useEffect(() => {
  //   wowMoviesLs.set('movies', dataMovies);
  // }, [dataMovies]);

  const handleFilterName = (value) => {
    setFilterNameMovie(value);
  };

  const handleFilterYear = (value) => {
    setFilterYearMovie(value);
  };

  const filteredMovie = dataMovies
    //filtros
    .filter((movie) => {
      return movie.movie.toLowerCase().includes(filterNameMovie.toLowerCase());
    })

    .filter((year) => {
      return filterYearMovie === ''
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

  return (
    <>
      <h1 className="card__text">Owen Wilson's "wow" exclamations in movies</h1>
      <FiltersWowMovies
        handleFilterName={handleFilterName}
        handleFilterYear={handleFilterYear}
        filterNameMovie={filterNameMovie}
        years={yearMovies()}
      />
      <MovieWowList movies={filteredMovie} />
    </>
  );
}

export default App;
