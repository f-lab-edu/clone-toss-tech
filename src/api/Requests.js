async function articlesData() {
  let articlesList;
  let articles;

  const loadData = async function () {
    try {
      await axios.get("../../data/articlesList.json").then((res) => {
        articlesList = res.data;
      });
    } catch (e) {
      alert("Error at Requests.js : " + e);
    }

    try {
      await axios.get("../../data/articles.json").then((res) => {
        articles = res.data;
      });
    } catch (e) {
      alert("Error at Requests.js: " + e);
    }
  }

  await loadData();

  const checkDataExist = async function () {
    if (articlesList === undefined || articles === undefined) {
      await loadData();
      return false;
    }
    return true;
  }

  const getArticlesList = function () {
    if (!checkDataExist()) {
      return;
    }
    return articlesList;
  };
  const getArticle = function (id) {
    if (!checkDataExist()) {
      return;
    }
    return articles["article_id"][id];
  };
  return {getArticlesList, getArticle};
}

const data = await articlesData();


export default function Requests() {
  return {
    getArticlesList: data.getArticlesList,
    getArticle: data.getArticle
  }
}
