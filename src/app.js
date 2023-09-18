import { html } from './utils';
import { initMocks } from './mocks/index';

const app = document.getElementById('root');
app.innerHTML = html`
  <section>
    <header class="main-header">
      <div class="header-container">
        <div class="logo-image">
          <img alt="로고 이미지" src="/images/logo-image.png" />
        </div>
      </div>
    </header>
  </section>
  <section>
    <div class="content" id="content"></div>
  </section>
`;

initMocks();
