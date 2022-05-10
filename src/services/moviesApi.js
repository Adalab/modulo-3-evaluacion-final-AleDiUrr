import { v4 as uuidv4 } from 'uuid';

const wowMoviesApi = (results) => {
  return fetch(`https://owen-wilson-wow-api.herokuapp.com/wows/random?
results=${results}`)
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((movie, index) => {
        return {
          id: uuidv4(),
          poster: movie.poster,
          movie: movie.movie,
          year: movie.year,
          line: movie.full_line,
          director: movie.director,
          audio: movie.audio,
          character: movie.character,
        };
      });
      return dataClean;
    });
};
export default wowMoviesApi;
