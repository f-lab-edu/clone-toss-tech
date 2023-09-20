import { formatDate, html } from '../../utils';

const setupTemplate = () => {
  const $content = document.getElementById('content');
  $content.innerHTML = html`
    <div id="articles">
      <h1>메인 페이지</h1>
    </div>
  `;
};

const makeArticleElement = props => {
  const { created_date: createdDate, id, summary, title, thumbnail_image: thumbnailImage } = props;
  const article = document.createElement('li');
  article.id = id;
  article.innerHTML = html`
    <img alt="썸네일 이미지" src="${thumbnailImage}" />
    <div>
      <span>${title}</span>
      <span>${summary}</span>
      <span>${formatDate(createdDate)}</span>
    </div>
  `;
  return article;
};

export default function render(articleList) {
  try {
    if (!articleList) {
      throw new Error('articleList is not defined.');
    }
    setupTemplate();
    const ul = document.createElement('ul');
    Object.entries(articleList).forEach(([id, content]) => {
      ul.prepend(makeArticleElement({ id, ...content }));
    });
    document.getElementById('articles').appendChild(ul);
  } catch (e) {
    if (import.meta.env.MODE === 'development') {
      console.error(`Error at main/index.js : ${e}`);
    }
  }
}
