import { fetchComments } from './fetchComments.js';

export const getCommentCounts = async (
  BASE_COMMENTS_API,
  APP_ENDPOINT_ID,
) => {
  await fetchComments();

  document.querySelectorAll('.view-more').forEach((button) => {
    button.addEventListener('click', async () => {
      const itemId = button.id[button.id.length - 1];

      const API_PATH = BASE_COMMENTS_API.concat(
        `apps/${APP_ENDPOINT_ID}/comments?item_id=${itemId}`,
      );

      const comments = await fetchComments(API_PATH);

      const commentsCount = comments.length;

      return commentsCount;
    });
  });
};

export default { getCommentCounts };
