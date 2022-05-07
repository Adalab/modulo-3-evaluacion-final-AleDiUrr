import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';
import wowMoviesApi from '../services/moviesApi';
//import wowMoviesLs from '../services/localStorage';
import Header from './Header';
import Footer from './Footer';
import MovieWowList from './MoviesWowList';
import FiltersWowMovies from './FiltersWowMovies';
import MovieWowDetail from './MovieWowDetail';

function App() {
  const [dataMovies, setDataMovies] = useState([]);
  const [filterNameMovie, setFilterNameMovie] = useState('');
  const [filterYearMovie, setFilterYearMovie] = useState('all');

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
                  filterNameMovie={filterNameMovie}
                  years={yearMovies()}
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
      <Footer />
    </>
  );
}

export default App;
