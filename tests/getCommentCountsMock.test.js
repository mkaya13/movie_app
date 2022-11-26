import { jestAPICredentials } from '../__mocks__/jestAPICredentials.js';
import { getCommentsMock } from '../__mocks__/getCommentsMock.js';

describe('Tests fetch with axios', () => {
  const { BASE_COMMENTS_API, COMMENTS_ENDPOINT_ID } = jestAPICredentials;
  const endpoint = BASE_COMMENTS_API.concat('apps/', COMMENTS_ENDPOINT_ID, '/comments?');
  const API_PATH_ITEM_5 = endpoint.concat('item_id=5');
  const API_PATH_ITEM_6 = endpoint.concat('item_id=6');
  const fivethItemCommentCount = 2;
  const sixthItemCommentCount = 2;
  const fivethItemCommentsFirstObject = {
    username: 'Seko',
    creation_date: '2022-11-25',
    comment: 'Perfect man!',
  };
  const fivethItemCommentsSecondObject = {
    username: 'Mert',
    creation_date: '2022-11-25',
    comment: 'Yes man!',
  };
  it('Comment Counts Testing item 5', async () => {
    const comments = await getCommentsMock(API_PATH_ITEM_5);
    expect(comments.length).toBe(fivethItemCommentCount);
  });

  it('Comment Counts Testing item 6', async () => {
    const comments = await getCommentsMock(API_PATH_ITEM_6);
    expect(comments.length).toBe(sixthItemCommentCount);
  });

  it('Checks comments objects of Item 5', async () => {
    const comments = await getCommentsMock(API_PATH_ITEM_5);
    expect(comments[0]).toMatchObject(fivethItemCommentsFirstObject);
    expect(comments[1]).toMatchObject(fivethItemCommentsSecondObject);
  });
});
