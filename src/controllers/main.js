import renderMainPage from '../views/main/index';
import { makeErrorLogOnConsole } from '../utils';

const setClickEventListenerOnArticle = router => {
  const $articleDivs = document.getElementsByClassName('main-article');
  $articleDivs.forEach(div => {
    div.addEventListener('click', () => {
      window.history.pushState('', '', `/article/${div.id}`);
      router.navigate(window.location.pathname);
      window.scrollTo(0, 0);
    });
  });
};

function Main(router, model) {
  try {
    this.render = async () => {
      renderMainPage(await model.getArticleList());
      setClickEventListenerOnArticle(router);
    };
    router.addRoute('/', this.render.bind(this));
  } catch (e) {
    makeErrorLogOnConsole(e);
  }
}

export default Main;
