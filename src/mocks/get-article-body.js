import { createMockServerEndpoint } from './config';
import { fetchMocks } from './utils';

export default function getArticleBodyHandler() {
  return createMockServerEndpoint('get', 'article/:id', fetchMocks('article-body'), (req, data) => data[req.params.id]);
}
