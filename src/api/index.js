import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
});

export const fetchData = path => {
  try {
    return instance.get(path);
  } catch (e) {
    // TODO: .env에서 개발/배포 환경 변수 불러와서 개발일 경우만 콘솔 남기도록 구분할 예정 Ticket WOO-64
    console.error(`Error at api/index.js : ${e}`);
    return null;
  }
};
