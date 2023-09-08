import { fetchFile } from './index';

const getArticleList = () => fetchFile('/data/articleList.json');

export default getArticleList;
