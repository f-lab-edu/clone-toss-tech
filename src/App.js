const html = (strings, ...values) => String.raw({ raw: strings }, ...values);
const app = document.getElementById('root');
app.innerHTML = html`
  <section>
    <header class="main-header">
      <div class="header-container">
        <div id="logo-image">
          <img src="/images/logo-image.png" class="logo-image" alt="로고 이미지" />
        </div>
      </div>
    </header>
  </section>
  <section>
    <div>
      <div id="content" class="content"></div>
    </div>
  </section>
`;
