export const fetchComments = async (API_PATH) => {
  const fetchedData = await fetch(API_PATH, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .catch((error) => error);
  return fetchedData;
};

export const populateComments = (comments, itemId) => {
  const getCommentsTag = document.querySelector(`.get-comments-tag-${itemId}`);
  getCommentsTag.innerHTML = '';
  const listItems = document.createElement('ul');
  listItems.className = 'comment-items';
  console.log(getCommentsTag);
  comments.forEach((comment) => {
    listItems.innerHTML += `
        <li class="each-comment">
          <span class="item-holder"> <span class="comment-username">${comment.creation_date} ${comment.username}:</span>   ${comment.comment}</span>
        </li>
      `;
  });
  getCommentsTag.appendChild(listItems);
  console.log(listItems);
  console.log('did it!');
};

export default { fetchComments, populateComments };
