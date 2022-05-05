import { useState, useEffect } from 'react';
import wowMoviesApi from '../services/moviesApi';
import wowMoviesLs from '../services/localStorage';
import MovieWowList from './MoviesWowList';

function App() {
  const [dataMovies, setDataMovies] = useState([]);

  useEffect(() => {
    wowMoviesApi().then((dataClean) => {
      setDataMovies(dataClean);
    });
  }, []);

  useEffect(() => {
    wowMoviesLs.set('movies', dataMovies);
  }, [dataMovies]);
  return (
    <>
      <h1 className="card__text">Owen Wilson's "wow" exclamations in movies</h1>
      <MovieWowList movies={dataMovies} />
    </>
  );
}
export default App;
