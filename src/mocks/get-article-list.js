import { rest } from 'msw';
import { createMockServerEndpoint } from './config';
import { fetchFile } from '../utils';

const getArticleListHandler = () => {
  return createMockServerEndpoint(rest.get, '/api/article-list', fetchFile('article-list'), (req, data) => data);
};

export default getArticleListHandler;
