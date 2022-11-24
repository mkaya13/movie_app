import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const BASE_COMMENTS_API = process.env.BASE_COMMENTS_API || '';
const APP_ENDPOINT_ID = process.env.APP_ENDPOINT_ID || '';

const API_PATH = BASE_COMMENTS_API.concat(`apps/${APP_ENDPOINT_ID}/likes`);

const postLikeResponse = fetch(API_PATH, {
  method: 'POST',
  body: JSON.stringify({
    item_id: '2',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response)
  .catch((error) => console.log(error));

const data = await postLikeResponse;
console.log(data);
