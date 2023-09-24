import { formatDate, html } from '../../utils';

export default function render(props) {
  const { body, created_date: createdDate, title, thumbnail_image: thumbnailImage } = props;
  const $content = document.getElementById('content');
  $content.innerHTML = html`
    <article>
      <header>
        <img alt="제목 이미지" src="${thumbnailImage}" />
        <h1>${title}</h1>
        <span>${formatDate(createdDate)}</span>
      </header>
      <div>${body}</div>
    </article>
  `;
}
