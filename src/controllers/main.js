import renderMainPage from '../views/main/index';
import { makeErrorLogOnConsole } from '../utils';

const setClickEventListenerOnArticle = router => {
  const $articleHeadContainers = document.getElementsByClassName('main-article');
  $articleHeadContainers.forEach($li => {
    $li.addEventListener('click', () => {
      window.history.pushState('', '', `/article/${$li.id}`);
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
