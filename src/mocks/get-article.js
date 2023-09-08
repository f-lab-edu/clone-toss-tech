import { fetchFile } from './index';

const getArticle = () => fetchFile('/data/articles.json');

export default getArticle;
