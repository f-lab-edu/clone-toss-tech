const app = document.getElementById("root");
app.innerHTML = /* HTML */ `
  <section>
    <header style="height: 60px; background-color: white; border-bottom: 1px solid black; position: fixed; top: 0; left: 0; right: 0;">
      <div style="width: 100%; max-width: 1140px; height: 100%; margin: 0 auto">
        <div style="display: flex; height: 100%;">
          <div style="display: flex; align-items: center" id="logoImage">
            <img src="images/LogoImage.png" style="max-height: 50px" alt="로고 이미지" />
          </div>
        </div>
      </div>
    </header>
  </section>
  <section>
    <div>
      <div id="content" style="min-height: calc(100vh - 60px); margin: 61px auto 50px;"></div>
    </div>
  </section>
`;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("logoImage").addEventListener("click", () => {
    history.pushState(null, null, "/");
  })
});
