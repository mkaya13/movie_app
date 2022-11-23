import { displayMovie } from './createMovie.js';
import { getMovies } from './getMovies.js';

export const show = async () => {
  const movie = await getMovies();
  displayMovie(movie);
};

export default { show };
