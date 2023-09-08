import { fetchFile } from './index';

const getArticleList = () => fetchFile('/data/article-list.json');

export default getArticleList;
