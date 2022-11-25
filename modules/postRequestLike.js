export const postRequestLike = async (itemId) => {
  const LIKES_API_ENDPOINT = process.env.LIKES_API_PATH || '';
  fetch(LIKES_API_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify({
      item_id: (Number(itemId) + 1).toString(),
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};
export const applyLike = async () => {
  document.querySelectorAll('.fa-regular,.fa-heart').forEach((likeButton) => {
    likeButton.addEventListener('click', async (event) => {
      event.preventDefault();
      if (likeButton.className === 'fa-regular fa-heart') {
        const itemId = likeButton.id[likeButton.id.length - 1];
        const likeNumberTag = document.getElementById(`like-number-${itemId}`);
        likeButton.className = 'fa-solid fa-heart';
        await postRequestLike(itemId);
        const likeNumber = Number(likeNumberTag.innerText);
        likeNumberTag.innerText = (likeNumber + 1).toString();
      } else {
        likeButton.className = 'fa-regular fa-heart';
      }
    });
  });
};
export default { postRequestLike, applyLike };