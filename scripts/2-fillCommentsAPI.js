import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

let BASE_COMMENTS_API = process.env.BASE_COMMENTS_API || '';
const COMMENTS_ENDPOINT_ID = process.env.COMMENTS_ENDPOINT_ID || '';
BASE_COMMENTS_API = BASE_COMMENTS_API.concat(
  `apps/${COMMENTS_ENDPOINT_ID}/comments`,
);

const response = fetch(BASE_COMMENTS_API, {
  method: 'POST',
  body: JSON.stringify({
    item_id: '1',
    username: 'Jane',
    comment: 'Hello I really liked that tv-series',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response)
  .catch((error) => console.log(error));

const data = await response;
console.log(data);
