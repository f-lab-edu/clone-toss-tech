import { rest } from 'msw';
import { createMockServerEndpoint } from './config';
import { fetchFile } from '../utils';

export default function getArticleListHandler() {
  return createMockServerEndpoint(rest.get, '/api/article-list', fetchFile('article-list'), (req, data) => data);
}
