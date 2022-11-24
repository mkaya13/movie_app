import { displayMovie } from './createMovie.js';
import { getLikes } from './getLikes.js';
import { getMovies } from './getMovies.js';

const APIUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/nmfrG36tREDV4HGApbkk/likes';

const createLike = async (itemId) => {
  await fetch(APIUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ item_id: itemId }),
  });
};

export const counter = () => {
  const likeBtn = document.querySelectorAll('.favorite');
  likeBtn.forEach((btn, index, itemId) => {
    btn.addEventListener('click', async () => {
      const data = await getLikes();
      itemId = data[index].item_id;

      await createLike(itemId);
      const likes = await getLikes();
      const movies = await getMovies();
      displayMovie(movies, likes);
      counter();
    });
  });
};

export default { counter };