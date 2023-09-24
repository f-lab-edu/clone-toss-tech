import renderMainPage from '../views/main/index';

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
  this.render = async () => {
    try {
      const contents = await model.getArticleList();
      renderMainPage(contents);
      setClickEventListenerOnArticle(router);
    } catch (e) {
      if (import.meta.env.DEV) console.error(`Error at controllers/main.js render : ${e}`);
    }
  };
  router.addRoute('/', this.render.bind(this));
}

export default Main;
