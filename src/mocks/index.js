import { setupWorker } from 'msw';
import getArticleListHandler from './get-article-list';
import getArticleBodyHandler from './get-article-body';

const initMocks = () => {
  try {
    const mockHandlers = [getArticleListHandler, getArticleBodyHandler].map(handler => handler());
    const worker = setupWorker(...mockHandlers);
    return worker.start();
  } catch (e) {
    // TODO: .env에서 개발/배포 환경 변수 불러와서 개발일 경우만 콘솔 남기도록 구분할 예정 Ticket WOO-64
    console.error(`Failed to start worker. Error is : ${e}`);
    return null;
  }
};

export { initMocks };
