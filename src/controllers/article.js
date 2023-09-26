import renderArticlePage from '../views/article/index';

function Article(router, model) {
  this.render = async () => {
    try {
      const targetID = window.location.pathname.replace('/article/', '').match(/\d+/).toString();
      const data = await model.getArticleBody(targetID);
      renderArticlePage(data);
    } catch (e) {
      if (import.meta.env.DEV) console.error(`Error at controllers/article.js render() : ${e}`);
    }
  };
  router.addRoute('/article/(\\d+)', this.render.bind(this));
}

export default Article;
