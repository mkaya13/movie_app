const APIUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/nmfrG36tREDV4HGApbkk/likes';

export const getLikes = async () => {
  const res = await fetch(APIUrl);
  const data = await res.json();
  return data;
};

export default { getLikes };