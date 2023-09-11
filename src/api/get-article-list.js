import { fetchData } from './index';

const getArticleList = async () => fetchData('/articles');

export default getArticleList;
