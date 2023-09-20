import { setupWorker } from 'msw';
import getArticleListHandler from './get-article-list';
import getArticleBodyHandler from './get-article-body';

const initMocks = () => {
  try {
    const mockHandlers = [getArticleListHandler, getArticleBodyHandler].map(handler => handler());
    const worker = setupWorker(...mockHandlers);
    worker.start();
    return true;
  } catch (e) {
    if (import.meta.env.DEV) {
      console.error(`Failed to start worker. Error is : ${e}`);
    }
    return false;
  }
};

export { initMocks };
