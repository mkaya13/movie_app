import { getLikes } from './getLikes.js';

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
      if (itemId) {
        btn.classList.toggle('favorite-color');
      }
      const data = await getLikes();
      itemId = data[index].item_id;
      const likesCount = data[index].likes;
      if (likesCount) {
        createLike(itemId);
        getLikes();
      }
    });
  });
};

export default { counter };