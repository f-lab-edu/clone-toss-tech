import MainController from './main';
import ArticleController from './article';

export default function Controller(router, model) {
  const main = new MainController(router, model);
  const article = new ArticleController(router, model);
  if (main && article) return true;

  return false;
}
