import { fetchData } from '../api/index.js';

const makeRequestToApi = path => {
  try {
    return fetchData(path).then(res => res.data);
  } catch (e) {
    if (import.meta.env.DEV) {
      console.error(`Error at article-data-handler.js makeRequestToApi(${path} : ${e}`);
    }
    return null;
  }
};

const setArticleList = async () => await makeRequestToApi('/articles');

function Article() {
  this.articleList = setArticleList();
  this.getArticleList = async () => await this.articleList;

  this.getArticleBody = async id => {
    const body = await makeRequestToApi(`/article/${id}`);
    return {
      ...this.articleList.articles[id],
      body: body.data,
    };
  };
}

export default Article;
