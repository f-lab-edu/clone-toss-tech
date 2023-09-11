import { fetchData } from './index';

const getArticleBody = async id => fetchData(`/article/${id}`);

export default getArticleBody;
