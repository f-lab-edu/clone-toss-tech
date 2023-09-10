const createMockServerEndpoint = (method, targetUrl, data, callback) =>
  method(targetUrl, (req, res, ctx) => res(ctx.status(200), ctx.json(callback(req, data))));

export { createMockServerEndpoint };
