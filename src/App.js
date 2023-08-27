import Controller from './Controller.js';
import Model from './Model.js';
import Router from './Router.js';
import ArticleView from './views/ArticleView.js';
import MainViewModule from './views/MainView.js';
import Requests from './api/Requests.js';

const app = document.getElementById("root");
app.innerHTML = `
<section>
  <header style="height: 60px; background-color: white; border-bottom: 1px solid black; position: fixed; top: 0; left: 0; right: 0;">
    <div style="width: 100%; max-width: 1140px; height: 100%; margin: 0 auto">
      <div style="display: flex; height: 100%;">
        <a style="display: flex; align-items: center" href="/">
          <img src="images/LogoImage.png" style="max-height: 50px" alt="로고 이미지, 클릭시 메인 페이지로 이동">
        </a>
      </div>
    </div>
  </header>
  <section>
    <div>
      <div id="content" style="min-height: calc(100vh - 60px); margin: 61px auto 50px;">
      </div>
    </div>
  </section>
</section>
`;

const Request = Requests();
// console.log(Request.getArticlesList())
// console.log(Request.getArticle(1))
const MainView = MainViewModule();
MainView.render(Request.getArticlesList())