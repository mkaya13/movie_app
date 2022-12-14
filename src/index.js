import { getMovies } from '../modules/getMovies.js';
import { show } from '../modules/movies.js';
import { showComponent } from '../modules/nav.js';
import { fetchComments, populateComments } from '../modules/fetchComments.js';
import { getCommentCounts } from '../modules/getCommentCounts.js';
// import { refreshButton } from '../modules/utils.js';
import { getLikes } from '../modules/getLikes.js';
import { applyLike } from '../modules/postRequestLike.js';
import './style.css';

const BASE_COMMENTS_API = process.env.BASE_COMMENTS_API || '';
const APP_ENDPOINT_ID = process.env.APP_ENDPOINT_ID || '';

let itemId = '';

const sendComments = async () => {
  document.querySelectorAll('.add-comments').forEach((button) => {
    button.addEventListener('submit', async (e) => {
      e.preventDefault();

      itemId = button.id;
      const inputNameTag = document.getElementById(`input-name-${itemId}`);
      const inputCommentsTag = document.getElementById(`input-comments-${itemId}`);

      const APIEndpoint = BASE_COMMENTS_API.concat(
        `apps/${APP_ENDPOINT_ID}/comments`,
      );

      await fetch(APIEndpoint, {
        method: 'POST',
        body: JSON.stringify({
          item_id: itemId,
          username: inputNameTag.value,
          comment: inputCommentsTag.value,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response)
        .catch((error) => error);

      inputNameTag.value = '';
      inputCommentsTag.value = '';

      const API_PATH = BASE_COMMENTS_API.concat(
        `apps/${APP_ENDPOINT_ID}/comments?item_id=${itemId}`,
      );
      const comments = await fetchComments(API_PATH);

      populateComments(comments, itemId);
    });
  });
};

const fillComments = async () => {
  document.querySelectorAll('.view-more').forEach((detailButton) => {
    detailButton.addEventListener('click', async (event) => {
      event.preventDefault();
      const itemId = detailButton.id[detailButton.id.length - 1];

      const API_PATH = BASE_COMMENTS_API.concat(
        `apps/${APP_ENDPOINT_ID}/comments?item_id=${itemId}`,
      );

      const comments = await fetchComments(API_PATH);
      const listItems = document.createElement('ul');
      listItems.className = 'comment-items';
      populateComments(comments, itemId, listItems);
    });
  });
};

const arrangeFunctionRuns = async () => {
  await show();
  showComponent();
  await getMovies();
  await applyLike();
  await getLikes();
  await getCommentCounts(BASE_COMMENTS_API, APP_ENDPOINT_ID);
  await fillComments();
  await sendComments();
};

arrangeFunctionRuns();

// refreshButton();
