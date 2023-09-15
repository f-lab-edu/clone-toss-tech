import { fetchData } from './api/index';

export default class Model {
  constructor() {
    this.setArticleList();
  }

  setArticleList() {
    this.articleList = fetchData('/articles').then(res => res.data);
  }

  getArticleList() {
    return this.articleList;
  }

  getArticleBody(id) {
    return fetchData(`/article/${id}`).then(res => res.data);
  }
}
