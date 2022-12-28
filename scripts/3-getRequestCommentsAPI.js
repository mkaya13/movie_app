import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const BASE_COMMENTS_API = process.env.BASE_COMMENTS_API || '';
const APP_ENDPOINT_ID = process.env.APP_ENDPOINT_ID || '';

const API_PATH = BASE_COMMENTS_API.concat(
  `apps/${APP_ENDPOINT_ID}/comments?item_id=1`,
);

const fetchData = async () => {
  const fetchedData = fetch(API_PATH, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .catch((error) => error);

  return fetchedData;
};

const returnScoreData = async () => {
  const responseData = await fetchData();
  console.log(responseData);
};

returnScoreData();
