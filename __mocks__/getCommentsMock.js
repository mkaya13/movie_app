import axios from 'axios';

export const getCommentsMock = async (API_PATH) => {
  const fetchedData = await axios(API_PATH, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.data)
    .catch((error) => error);
  return fetchedData;
};

export default { getCommentsMock };
