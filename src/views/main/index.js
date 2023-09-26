import { formatDate, html } from '../../utils';
import { ErrorComponent } from '../error/index';
import styles from './index.module.css';

const setupTemplate = () => {
  const $content = document.getElementById('content');
  $content.innerHTML = html`
    <div class="${styles['content-inner']}" id="articles">
      <h1 class="${styles['main-title']}">메인 페이지</h1>
    </div>
  `;
};

const makeArticleElement = props => {
  const { created_date: createdDate, id, summary, title, thumbnail_image: thumbnailImage } = props;
  const article = document.createElement('li');
  article.id = id;
  article.className = styles['main-article-container'];
  article.innerHTML = html`
    <img alt="썸네일 이미지" src="${thumbnailImage}" />
    <div>
      <span class="${styles['main-article-title']}">${title}</span>
      <span class="${styles['main-article-summary']}">${summary}</span>
      <span class="${styles['main-article-created-date']}">${formatDate(createdDate)}</span>
    </div>
  `;
  return article;
};

export default function render(articleList) {
  setupTemplate();
  const $articleContainer = document.getElementById('articles');
  if (!articleList) return $articleContainer.appendChild(ErrorComponent('articleList load failure'));

  const ul = document.createElement('ul');
  Object.entries(articleList).forEach(([id, content]) => {
    ul.prepend(makeArticleElement({ id, ...content }));
  });
  return $articleContainer.appendChild(ul);
}
