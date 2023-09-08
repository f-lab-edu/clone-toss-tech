const setRequestHandler = (requestMethod, targetUrl, data, callback) =>
  requestMethod(targetUrl, (req, res, ctx) => res(ctx.status(200), ctx.json(callback(req, data))));

export { setRequestHandler };
