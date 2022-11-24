export const getLikes = async () => {
  const LIKES_API_ENDPOINT = process.env.LIKES_API_PATH || '';
  const res = await fetch(LIKES_API_ENDPOINT);
  const data = await res.json();
  return data;
};

export default { getLikes };
