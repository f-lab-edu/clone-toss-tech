import ARTICLE_LIST from '../../__fixtures__/article-list.json';
import ARTICLE_BODY from '../../__fixtures__/article-body.json';

export function fetchMocks(path) {
  try {
    switch (path) {
      case 'article-list': {
        return ARTICLE_LIST;
      }
      case 'article-body': {
        return ARTICLE_BODY;
      }
      default: {
        throw new Error(`Invalid path: ${path}`);
      }
    }
  } catch (e) {
    if (import.meta.env.MODE === 'development') {
      console.error(`Error at mocks/utils.js : ${e}`);
    }
    return null;
  }
}
