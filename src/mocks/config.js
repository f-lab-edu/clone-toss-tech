import { rest } from 'msw';

const setRequestHandler = (targetUrl, data, useParams = false) =>
  rest.get(targetUrl, (req, res, ctx) => res(ctx.status(200), ctx.json(useParams ? data[Object.values(req.params)[0]] : data)));
// Object.values(req.params)[0] is the id of the article if useParams is true and url is '/api/get/article/:id'
export { setRequestHandler };
