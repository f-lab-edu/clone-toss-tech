import { html } from './utils';
import { initMocks } from './mocks/index';
import Router from './router';
import Model from './models/article';
import Controller from './controllers/index';

const onClickLogo = router => {
  const logoImage = document.getElementsByClassName('logo-image-container');
  if (logoImage) {
    logoImage[0].addEventListener('click', () => {
      if (window.location.pathname !== '/') {
        window.history.pushState('', '', '/');
        router.navigate(window.location.pathname);
      }
    });
  }
};
const hasMocks = initMocks();
const start = () => {
  const app = document.getElementById('root');
  app.innerHTML = html`
    <section>
      <header class="main-header">
        <div class="header-container">
          <div class="logo-image-container">
            <img alt="로고 이미지" src="/images/logo-image.png" />
          </div>
        </div>
      </header>
    </section>
    <section>
      <div id="content"></div>
    </section>
  `;
  const router = new Router();
  const model = new Model();
  const hasController = Controller(router, model);
  onClickLogo(router);
  if (hasController) router.start();
};

if (hasMocks) {
  document.addEventListener('DOMContentLoaded', start);
}
