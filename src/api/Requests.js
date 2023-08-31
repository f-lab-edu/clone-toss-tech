import axios from "axios";

async function articlesData() {
  let articlesList;

  const loadData = async function () {
    try {
      await axios.get("../../data/articlesList.json").then((res) => {
        articlesList = res.data;
      });
    } catch (e) {
      alert("Error at Requests.js : " + e);
    }
  };

  await loadData();

  const checkDataExist = async function () {
    if (articlesList === undefined) {
      await loadData();
      return false;
    }
    return true;
  };

  const getArticlesList = function () {
    if (!checkDataExist()) {
      return;
    }
    return articlesList;
  };

  return { getArticlesList };
}

const data = await articlesData();

export default function Requests() {
  return {
    getArticlesList: data.getArticlesList,
  };
}
