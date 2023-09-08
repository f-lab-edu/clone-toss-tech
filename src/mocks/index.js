import { setupWorker } from 'msw';
import axios from 'axios';
import getArticleListHandler from './get-article-list';
import getArticleBodyHandler from './get-article-body';

const articleListHandler = await getArticleListHandler();
const articleBodyHandler = await getArticleBodyHandler();

const handlers = [articleListHandler, articleBodyHandler];

const worker = setupWorker(...handlers);

const initMocks = () => {
  try {
    return worker.start();
  } catch (e) {
    // TODO: Same as below. Ticket WOO-64
    console.error('Failed to start worker. Error is : ' + e);
  }
};

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
