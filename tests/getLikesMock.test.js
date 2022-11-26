import { getLikesMock } from '../__mocks__/getLikesMock.js';

// arrange
describe('Tests fetch with axios', () => {
  const endpoint = process.env.LIKES_API_PATH;

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
