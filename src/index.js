import { getMovies } from '../modules/getMovies.js';
import { show } from '../modules/movies.js';
import { showComponent } from '../modules/nav.js';
import './style.css';

const BASE_COMMENTS_API = process.env.BASE_COMMENTS_API || '';
const COMMENTS_ENDPOINT_ID = process.env.COMMENTS_ENDPOINT_ID || '';

show();
showComponent();

let itemId = '';

const grabId = async () => {
  document.querySelectorAll('.add-comments').forEach((button) => {
    button.addEventListener('submit', (e) => {
      e.preventDefault();

      itemId = button.id;
      const inputNameTag = document.getElementById(`input-name-${itemId}`);
      const inputCommentsTag = document.getElementById(`input-comments-${itemId}`);

      const APIEndpoint = BASE_COMMENTS_API.concat(
        `apps/${COMMENTS_ENDPOINT_ID}/comments`,
      );

      fetch(APIEndpoint, {
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
    });
  });
};

const fillComments = async () => {
  document.querySelectorAll('.view-more').forEach((detailButton) => {
    detailButton.addEventListener('click', async (event) => {
      event.preventDefault();
      const itemId = detailButton.id[detailButton.id.length - 1];

      const API_PATH = BASE_COMMENTS_API.concat(
        `apps/${COMMENTS_ENDPOINT_ID}/comments?item_id=${itemId}`,
      );

      console.log(API_PATH);

      const fetchComments = async () => {
        const fetchedData = await fetch(API_PATH, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        })
          .then((response) => response.json())
          .catch((error) => error);
        return fetchedData;
      };

      const comments = await fetchComments();
      console.log(comments);

      const listItems = document.createElement('ul');
      listItems.className = 'comment-items';
      const getCommentsTag = document.querySelector(`.get-comments-tag-${itemId}`);
      getCommentsTag.innerHTML = '';
      console.log(getCommentsTag);
      comments.forEach((comment) => {
        listItems.innerHTML += `
          <li class="each-comment">
            <span class="item-holder"> <span class="comment-username">${comment.creation_date} ${comment.username}:</span>   ${comment.comment}</span>
          </li>
        `;
      });
      getCommentsTag.appendChild(listItems);
    });
  });
};

const popupArrange = async () => {
  await getMovies();
  await fillComments();
  await grabId();
};

popupArrange();
