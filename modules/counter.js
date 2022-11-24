import { getLikes } from './getLikes.js';

const APIUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/nmfrG36tREDV4HGApbkk/likes';

const createLike = async () => {
  await fetch(APIUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ item_id: '' }),
  });
};

export const retrieveLikes = async (index) => {
  const data = await getLikes();
  const likesVal = parseInt(data[index].likes, 10);
  if (likesVal >= 0) {
    console.log(likesVal + 1);
  } else {
    console.log(likesVal - 1);
  }
};

export const counter = () => {
  const likeBtn = document.querySelectorAll('.favorite');
  likeBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      createLike();
      retrieveLikes(index);
    });
  });
};

export default { counter, retrieveLikes };