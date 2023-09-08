import { rest } from 'msw';
import { fetchFile } from './index';
import { setRequestHandler } from './config';

const getArticleListHandler = async () => {
  const fixture = await fetchFile('/__fixtures__/article-list.json');
  return setRequestHandler(rest.get, '/api/get/article-list', fixture, (req, data) => data);
};

export default getArticleListHandler;
