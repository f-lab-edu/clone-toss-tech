import { fetchData } from '../api/index.js';

const makeRequestToAPI = path => {
  try {
    return fetchData(path).then(res => res.data);
  } catch (e) {
    if (import.meta.env.DEV) {
      console.error(`Error at article.js makeRequestToAPI(${path} : ${e}`);
    }
    return null;
  }
};

const setArticleList = async () => {
  const result = await makeRequestToAPI('/articles');
  try {
    if (!!result && !!result.articles) {
      return result.articles;
    }
    throw new Error('articleList is not defined.');
  } catch (e) {
    if (import.meta.env.DEV) {
      console.error(`Error at article.js setArticleList() : ${e}`);
    }
    return null;
  }
};

function Article() {
  this.articleList = setArticleList();
  this.getArticleList = async () => await this.articleList;

  this.getArticleBody = async id => {
    const body = await makeRequestToAPI(`/article/${id}`);
    return {
      ...this.articleList[id],
      body: body.data,
    };
  };
}

export default Article;
