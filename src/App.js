const app = document.getElementById("root");
app.innerHTML = /* HTML */ `
  <section>
    <header class="main-header">
      <div class="header-container">
        <div id="logoImage">
          <img src="images/LogoImage.png" class="logo-image" alt="로고 이미지" />
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

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("logoImage").addEventListener("click", () => {
    history.pushState(null, null, "/");
  });
});
