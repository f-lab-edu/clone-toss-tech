import { setupWorker } from 'msw';
import axios from 'axios';
import { setRequestHandler } from './config';
import getArticleList from './get-article-list';
import getArticle from './get-article';

const articleList = await getArticleList();
const articleListHandler = setRequestHandler('/api/get/article-list', articleList);
const articles = await getArticle();
const articleHandler = setRequestHandler('/api/get/article/:id', articles, true);

const handlers = [articleListHandler, articleHandler];

const worker = setupWorker(...handlers);

const initMocks = () => worker.start();

export async function fetchFile(path) {
  try {
    const res = await axios.get(path);
    return res.data;
  } catch (e) {
    // TODO: .env에서 개발/배포 환경 변수 불러와서 개발일 경우만 콘솔 남기도록 구분할 예정 Ticket WOO-64
    console.error('Error at index.js : ' + e);
  }
}

export { initMocks };
