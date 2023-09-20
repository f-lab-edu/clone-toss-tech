import { fetchData } from '../api/index.js';

const makeRequest = path => {
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
  const result = await makeRequest('/articles');
  if (!result) return null;
  return result.articles;
};

function Article() {
  this.articleList = setArticleList();
  this.getArticleList = async () => await this.articleList;
  this.getArticleBody = async id => {
    const { data } = await makeRequest(`/article/${id}`);
    if (data && this.articleList[id]) return { ...this.articleList[id], body: data };
    return null;
  };
}

export default Article;
