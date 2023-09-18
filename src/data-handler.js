import { fetchData } from './api/index.js';

export default class DataHandler {
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

  getArticleData(id) {
    if (!id) {
      return this.articleList;
    }
    try {
      const articleInfo = this.articleList;
      const bodyData = fetchData(`/article/${id}`);
      return Promise.all([articleInfo, bodyData]).then(([articleInfo, bodyData]) => ({
        ...articleInfo[id],
        body: bodyData.data,
      }));
    } catch (e) {
      if (import.meta.env.DEV) {
        console.error(`Error at model method getArticleBody : ${e}`);
      }
      return null;
    }
  }
}
