export default class Router {
  constructor() {
    this.routes = [];
    this.currentPath = null;
  }

  addRoute(pattern, handler) {
    const regex = new RegExp(`^${pattern}$`);
    this.routes.push({ regex, handler });
    return this;
  }

  navigate(path) {
    if (this.currentPath === path) {
      return;
    }
    const route = this.routes.find(r => r.regex.test(path));
    if (route) {
      const params = path.match(route.regex);
      route.handler(params);
    } else {
      this.notFound();
    }
    this.currentPath = path;
  }

  setNotFound(handler) {
    this.notFound = handler;
    return this;
  }

  start() {
    window.addEventListener('popstate', () => {
      this.navigate(window.location.pathname);
    });
    this.navigate(window.location.pathname);
  }
}
