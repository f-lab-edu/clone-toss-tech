import renderArticlePage from '../views/article/index';

function Article(router, model) {
  this.render = async () => {
    try {
      const match = window.location.pathname.match(/\/article\/(\d+)/);
      const targetID = match ? match[1] : null;
      if (targetID) {
        const data = await model.getArticleBody(targetID);
        renderArticlePage(data);
      }
      return null;
    } catch (e) {
      if (import.meta.env.DEV) console.error(`Error at controllers/article.js render() : ${e}`);
    }
  };
  router.addRoute('/article/(\\d+)', this.render.bind(this));
}

export default Article;
