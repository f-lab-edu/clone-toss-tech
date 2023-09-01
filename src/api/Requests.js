import axios from "axios";

const attributeFilePath = {
  main: "../../data/articlesList.json",
  article: "../../data/article.json",
};

async function fetchFile(path) {
  try {
    return await axios.get(path).then((res) => {
      return res.data;
    });
  } catch (e) {
    alert("Error at Requests.js : " + e);
  }
}

async function getData(attribute) {
  const filePath = attributeFilePath[attribute];
  return await fetchFile(filePath);
}

function getArticlesList() {
  return getData("main");
}

function getArticle() {
  return getData("article");
}

export default function Requests() {
  return {
    getArticlesList,
    getArticle,
  };
}
