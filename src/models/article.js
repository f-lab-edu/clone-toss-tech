import { fetchData } from '../api/index';

const makeRequest = path => {
  try {
    return fetchData(path).then(res => res.data);
  } catch (e) {
    if (import.meta.env.DEV) console.error(`Error at article.js makeRequestToAPI(${path} : ${e}`);

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
  this.getArticleBody = id =>
    Promise.all([this.getArticleList(), makeRequest(`/article/${id}`)])
      .then(([head, body]) => {
        if (head && body) return { ...head[id], body };

        return null;
      })
      .catch(e => {
        if (import.meta.env.DEV) console.error(`Error at article.js getArticleBody(${id}) : ${e}`);

        return null;
      });
}

export default Article;
