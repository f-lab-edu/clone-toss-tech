import { rest } from 'msw';
import { fetchFile } from './index';
import { setRequestHandler } from './config';

const getArticleBodyHandler = async () => {
  const fixture = await fetchFile('/__fixtures__/article-body.json');
  return setRequestHandler(rest.get, '/api/get/article/:id', fixture, (req, data) => data[req.params.id]);
};

export default getArticleBodyHandler;
