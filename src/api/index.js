import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
});

export const fetchData = path => {
  try {
    return instance.get(path);
  } catch (e) {
    console.error(`Error at api/index.js : ${e}`);
    return null;
  }
};
