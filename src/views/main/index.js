import { format } from 'date-fns';
import { html } from '../../utils';

const setupTemplate = () => {
  const $content = document.getElementById('content');
  $content.innerHTML = html`
    <div id="articles">
      <h1>메인 페이지</h1>
    </div>
  `;
};

const makeArticleElement = props => {
  const { thumbnail_image: thumbnailImage, title, summary, created_date: createdDate, id } = props;
  const article = document.createElement('div');
  article.id = id;
  article.innerHTML = html`
    <img alt="썸네일 이미지" src="${thumbnailImage}" />
    <div>
      <span>${title}</span>
      <span>${summary}</span>
      <span>${format(createdDate, 'yyyy.MM.dd')}</span>
    </div>
  `;
  return article;
};

export default function render(articleList) {
  setupTemplate();
  const newArticlesUlElement = document.createElement('ul');
  const articleListArray = Object.entries(articleList).map(([id, value]) => ({ id, ...value }));
  const $articles = document.getElementById('articles');

  Object.keys(articleList).forEach(() => {
    newArticlesUlElement.append(makeArticleElement(articleListArray.pop()));
  });
  $articles.appendChild(newArticlesUlElement);
}
