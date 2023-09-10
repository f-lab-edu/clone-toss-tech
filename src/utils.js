import ARTICLE_LIST from '../__fixtures__/article-list.json';

export function fetchFile(path) {
  try {
    switch (path) {
      case 'article-list':
        return ARTICLE_LIST;
      default:
        throw new Error(`Invalid path: ${path}`);
    }
  } catch (e) {
    // TODO: .env에서 개발/배포 환경 변수 불러와서 개발일 경우만 콘솔 남기도록 구분할 예정 Ticket WOO-64
    console.error(`Error at utils.js : ${e}`);
    return null;
  }
}
