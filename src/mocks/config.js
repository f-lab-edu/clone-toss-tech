import { rest } from 'msw';

const basePath = '/api/';
const createMockServerEndpoint = (method, targetUrl, data, callback) =>
  rest[method.toLowerCase()](`${basePath}${targetUrl}`, (req, res, ctx) => res(ctx.status(200), ctx.json(callback(req, data))));

export { createMockServerEndpoint };
