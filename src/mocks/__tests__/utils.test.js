import { fetchMocks } from '../utils';
import ARTICLE_LIST from '../../../__fixtures__/article-list.json';

describe('fetchMocks', () => {
  it('should return article-list.json if path is "article-list"', () => {
    const result = fetchMocks('article-list');
    expect(result).toEqual(ARTICLE_LIST);
  });

  it('should return null and produce console.error if got invalid path.', () => {
    console.error = jest.fn();
    const result = fetchMocks('test/not-existing-path');
    expect(result).toBeNull();
    expect(console.error).toHaveBeenCalledWith(expect.stringContaining('Error at utils.js : Error: Invalid path:'));
  });
});
