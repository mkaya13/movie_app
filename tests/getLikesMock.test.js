import { jestAPICredentials } from '../__mocks__/jestAPICredentials.js';
import { getLikesMock } from '../__mocks__/getLikesMock.js';

// arrange
describe('Tests fetch with axios', () => {
  const { LIKES_ENDPOINT_API } = jestAPICredentials;
  const endpoint = LIKES_ENDPOINT_API;

  it('Grabs Likes Count', async () => {
    const likesData = await getLikesMock(endpoint);
    let likeCount = '';
    likesData.forEach((likeDataObject) => {
      if (likeDataObject.item_id === '4') {
        likeCount = likeDataObject.likes;
      }
    });
    expect(Number(likeCount)).toBe(14);
  });
});
