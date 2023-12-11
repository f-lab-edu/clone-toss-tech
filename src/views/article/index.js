import { formatDate, html } from '../../utils';
import styles from './index.module.css';

export default function render(props) {
  const { body, created_date: createdDate, title, thumbnail_image: thumbnailImage } = props;
  const $content = document.getElementById('content');
  $content.innerHTML = html`
    <article class="${styles['content-inner']}">
      <header>
        <div class="${styles['header-image']}">
          <img alt="제목 이미지" src="${thumbnailImage}" />
        </div>
        <div class="${styles['header-title-container']}">
          <h1>${title}</h1>
        </div>
        <div class="${styles['header-created-date-container']}">
          <span>${formatDate(createdDate)}</span>
        </div>
      </header>
      <div class="${styles['article-body']}">${body}</div>
    </article>
  `;
}
