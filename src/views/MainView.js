export default function MainView() {
  const $content = document.getElementById("content");
  $content.style.maxWidth = "980px";
  $content.innerHTML += /* HTML */ `
    <div id="articles">
      <h1 style="font-size: x-large; margin: 120px 10px 60px">메인 페이지</h1>
    </div>
  `;

  function formatDate(inputDate) {
    const year = inputDate.substring(0, 4);
    const month = inputDate.substring(4, 6);
    const day = inputDate.substring(6, 8);

    return `${year}. ${parseInt(month, 10)}. ${parseInt(day, 10)}`;
  }

  const articlesUlElement = document.createElement("ul");
  articlesUlElement.style.listStyle = "none";
  articlesUlElement.style.padding = "0";
  articlesUlElement.style.alignSelf = "stretch";

  const addArticleFormat = function (props) {
    const { thumbnail_image: thumbnailImage, title, summary, created_date: createdDate, articleId: id } = props;
    const article = document.createElement("a");
    article.style.display = "flex";
    article.style.cursor = "pointer";
    article.style.alignItems = "center";
    article.style.maxWidth = "100%";
    article.style.textDecoration = "none";
    article.href = `/article/${id}`;
    article.style.marginTop = "80px";
    article.innerHTML = /* HTML */ `
      <img src="${thumbnailImage}" style="width: 240px; height: 240px; margin-right: 48px; border-radius: 14px; object-fit: cover" alt="썸네일 이미지" />
      <div>
        <span
          style="display: inline-block; overflow: hidden; line-height: 1.4; text-overflow: ellipsis;
          overflow-wrap: break-word; word-break: break-word; color: black;
          font-size: 36px; font-weight: bold; margin-bottom: 0.5rem"
          >${title}</span
        >
        <span style="font-size: 17px; display: block; color: gray; margin-bottom: 0.5rem">${summary}</span>
        <span style="font-size: 15px; color: gray">${formatDate(createdDate)}</span>
      </div>
    `;
    articlesUlElement.appendChild(article);
  };

  const render = function (articlesData) {
    const articlesDataArray = Object.entries(articlesData["articles"]).map(([key, value]) => {
      return { id: key, ...value };
    });
    const $articlesElement = document.getElementById("articles");
    for (const articleId in articlesData["articles"]) {
      addArticleFormat(articlesDataArray.pop());
    }
    $articlesElement.appendChild(articlesUlElement);
  };

  return { render };
}
