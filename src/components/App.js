import { useState, useEffect } from 'react';
import wowMoviesApi from '../services/MoviesApi';

function App() {
  const [dataMovie, setDataMovie] = useState([]);

  useEffect(() => {
    wowMoviesApi().then((dataClean) => {
      setDataMovie(dataClean);
    });
  }, []);
  return (
    <>
      <h1>Owen Wilson's "wow" exclamations in movies</h1>
    </>
  );
}
export default App;
