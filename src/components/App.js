import { useState, useEffect } from 'react';
import wowMoviesApi from '../services/moviesApi';
import wowMoviesLs from '../services/localStorage';
import MovieWowList from './MoviesWowList';
import FiltersWowMovies from './FiltersWowMovies';

function App() {
  const [dataMovies, setDataMovies] = useState(wowMoviesLs.get('movies', []));
  const [filterNameMovie, setFilterNameMovie] = useState('');

  useEffect(() => {
    wowMoviesApi().then((dataClean) => {
      setDataMovies(dataClean);
      console.log(dataClean);
    });
  }, []);

  useEffect(() => {
    wowMoviesLs.set('movies', dataMovies);
  }, [dataMovies]);

  const filteredNameMovie = dataMovies.filter((movie) => {
    return movie.movie.toLowerCase().includes(filterNameMovie.toLowerCase());
  });

  const handleFilterName = (value) => {
    setFilterNameMovie(value);
  };

  return (
    <>
      <h1 className="card__text">Owen Wilson's "wow" exclamations in movies</h1>
      <FiltersWowMovies
        handleFilterName={handleFilterName}
        filterNameMovie={filterNameMovie}
      />
      <MovieWowList movies={filteredNameMovie} />
    </>
  );
}

export default App;
