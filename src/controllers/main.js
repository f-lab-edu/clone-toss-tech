import renderMainPage from '../views/main/index';

const onClickArticle = router => {
  const $articleHeadContainers = document.querySelectorAll('li'); // 추후 CSS 작업 이후 class가 적용된 다음 다시 변경 예정 Ticket: WOO-83
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
      onClickArticle(router);
    } catch (e) {
      if (import.meta.env.DEV) console.error(`Error at controllers/main.js render : ${e}`);
    }
  };
  router.addRoute('/', this.render.bind(this));
}

export default Main;
