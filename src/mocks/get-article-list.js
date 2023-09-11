import { createMockServerEndpoint } from './config';
import { fetchMocks } from './utils';

export default function getArticleListHandler() {
  return createMockServerEndpoint('get', 'articles', fetchMocks('article-list'), (req, data) => data);
}
