import { html } from './utils';
import { initMocks } from './mocks/index';
import Router from './router';
import Model from './models/article';
import Controller from './controllers/index';

const onClickLogo = router => {
  const $logo = document.getElementsByClassName('logo-container');
  if ($logo) {
    $logo[0].addEventListener('click', () => {
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
    <header class="main-header">
      <div class="header-container">
        <div class="header-container-inner">
          <div class="logo-container">
            <img alt="로고 아이콘" src="/images/logo-image.png" />
          </div>
        </div>
      </div>
    </header>
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
