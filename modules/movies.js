import { counter } from './counter.js';
import { displayMovie } from './createMovie.js';
import { getLikes } from './getLikes.js';
import { getMovies } from './getMovies.js';

export const show = async () => {
  const movies = await getMovies();
  const likes = await getLikes();
  displayMovie(movies, likes);
  counter();
};

export default { show };
