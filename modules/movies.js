import { displayMovie } from './createMovie.js';
import { getMovies } from './getMovies.js';

export const show = async () => {
  const movies = await getMovies();
  displayMovie(movies);
};

export default { show };
