import { getMovies } from '../modules/getMovies.js';
import { show } from '../modules/movies.js';
import { showComponent } from '../modules/nav.js';
import { fetchComments, populateComments } from '../modules/fetchComments.js';
// import { refreshButton } from '../modules/utils.js';
import './style.css';

const BASE_COMMENTS_API = process.env.BASE_COMMENTS_API || '';
const COMMENTS_ENDPOINT_ID = process.env.COMMENTS_ENDPOINT_ID || '';


console.log(BASE_COMMENTS_API);
console.log(COMMENTS_ENDPOINT_ID);

let itemId = '';

const sendComments = async () => {
  document.querySelectorAll('.add-comments').forEach((button) => {
    button.addEventListener('submit', async (e) => {
      e.preventDefault();

      itemId = button.id;
      const inputNameTag = document.getElementById(`input-name-${itemId}`);
      const inputCommentsTag = document.getElementById(`input-comments-${itemId}`);

      const APIEndpoint = BASE_COMMENTS_API.concat(
        `apps/${COMMENTS_ENDPOINT_ID}/comments`,
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

      console.log("YEAH!")

      inputNameTag.value = '';
      inputCommentsTag.value = '';

      const API_PATH = BASE_COMMENTS_API.concat(
        `apps/${COMMENTS_ENDPOINT_ID}/comments?item_id=${itemId}`,
      );
      const comments = await fetchComments(API_PATH);
      console.log(comments);
      console.log(itemId);

      populateComments(comments, itemId);
    });
  });
};

const fillComments = async () => {
  console.log("Inside fillComments");
  console.log(document.querySelectorAll('.view-more'));
  document.querySelectorAll('.view-more').forEach((detailButton) => {
    detailButton.addEventListener('click', async (event) => {
      event.preventDefault();
      const itemId = detailButton.id[detailButton.id.length - 1];

      const API_PATH = BASE_COMMENTS_API.concat(
        `apps/${COMMENTS_ENDPOINT_ID}/comments?item_id=${itemId}`,
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
  await fillComments();
  await sendComments();
};

arrangeFunctionRuns();

// refreshButton();
