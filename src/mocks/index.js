import { setupWorker } from 'msw';
import getArticleListHandler from './get-article-list';
import getArticleBodyHandler from './get-article-body';

const initMocks = () => {
  try {
    const mockHandlers = [getArticleListHandler, getArticleBodyHandler].map(handler => handler());
    const worker = setupWorker(...mockHandlers);
    return worker.start();
  } catch (e) {
    if (import.meta.env.VITE_APP_ENV === 'development') {
      console.error(`Failed to start worker. Error is : ${e}`);
    }
    return null;
  }
};

export { initMocks };
