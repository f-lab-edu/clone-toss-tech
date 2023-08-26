async function articlesData() {
  let articlesList;
  let articles;

  await axios.get("../../data/articlesList.json").then((res) => {
    articlesList = res.data;
  });
  await axios.get("../../data/articles.json").then((res) => {
    articles = res.data;
  });

  let getArticlesList = function () {
    return articlesList;
  };
  let getArticle = function (id) {
    return articles["article_id"][id];
  };
  return { getArticlesList, getArticle };
}

let data = await articlesData();


export default function Requests () {
  return {
    getArticlesList: data.getArticlesList,
    getArticle: data.getArticle
  }
}
