import { fetchData } from '../api/index.js';

const makeRequest = path => {
  try {
    return fetchData(path).then(res => res.data);
  } catch (e) {
    // TODO: DEV 환경일 때 에러 정보 로그를 출력하는 Util function 추가 예정 Ticket: WOO-75
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
  this.getArticleBody = async id => {
    try {
      const body = await makeRequest(`/article/${id}`);
      const head = (await this.getArticleList())[id];
      if (body && head) return { ...head, body };

      return null;
    } catch (e) {
      // TODO: 상동 Ticket: WOO-75
      if (import.meta.env.DEV) console.error(`Error at article.js getArticleBody(${id}) : ${e}`);

      return null;
    }
  };
}

export default Article;
