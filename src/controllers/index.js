import Router from '../router';
import MainController from './main';
import ArticleModel from '../models/article';
import ArticleController from './article';

const setGoToRootPageOnLogo = router => {
  const logoImage = document.getElementsByClassName('logo-image');
  if (logoImage) {
    logoImage[0].addEventListener('click', () => {
      if (window.location.pathname !== '/') {
        window.history.pushState('', '', '/');
        router.navigate(window.location.pathname);
      }
    });
  }
};

const createInstance = Module => {
  try {
    return new Module();
  } catch (e) {
    if (import.meta.env.DEV) console.error(`Error at controllers/index.js createInstance, module = ${Module.toString()}, ${e}`);

    return null;
  }
};

const initController = (Controller, router, model) => {
  try {
    if (router && model) return new Controller(router, model);
  } catch (e) {
    if (import.meta.env.DEV)
      console.error(`Error at controllers/index.js initController, controller = ${Controller.toString()}, ${e}`);
    return null;
  }
};

export default function ControllerInitializer() {
  const router = createInstance(Router);
  const model = createInstance(ArticleModel);
  const main = initController(MainController, router, model);
  const article = initController(ArticleController, router, model);
  setGoToRootPageOnLogo(router);
  if (main && article) router.start();
}
