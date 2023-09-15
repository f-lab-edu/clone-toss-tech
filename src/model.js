import { fetchData } from './api/index';

export default class Model {
  constructor() {
    this.setArticleList();
  }

  setArticleList() {
    try {
      this.articleList = fetchData('/articles').then(res => res.data);
    } catch (e) {
      if (import.meta.env.DEV) {
        console.error(`Error at model method setArticleList : ${e}`);
      }
    }
  }

  getArticleList() {
    return this.articleList;
  }

  getArticleBody(id) {
    try {
      return fetchData(`/article/${id}`).then(res => res.data);
    } catch (e) {
      if (import.meta.env.DEV) {
        console.error(`Error at model method getArticleBody : ${e}`);
      }
    }
  }
}
