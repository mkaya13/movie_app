import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const BASE_COMMENTS_API = process.env.BASE_COMMENTS_API || '';

const response = await fetch(BASE_COMMENTS_API.concat('apps/'), {
  method: 'POST',
});

const data = await response.json();
console.log(data);
