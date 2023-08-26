import Controller from './Controller.js';
import Model from './Model.js';
import Router from './Router.js';
import ArticleView from './views/ArticleView.js';
import MainView from './views/MainView.js';
import Requests from './api/Requests.js';

const app = document.getElementById("root");
app.innerHTML = `
<section>
  <header>
    <div style="height: 60px; border-bottom: 1px solid black; display: flex; position: fixed; top: 0; left: 0; right: 0;">
      <div style="display: flex;">
        <a style="display: flex; align-items: center" href="/">
          <img src="images/LogoImage.png" style="max-height: 50px" alt="로고 이미지, 클릭시 메인 페이지로 이동">
        </a>
      </div>
    </div>
  </header>
  <section>
    <div id="content" style="min-height: calc(100vh - 60px); padding-top: 60px">
    </div>
  </section>
</section>
`;

const Request = Requests();
// console.log(Request.getArticlesList())
// console.log(Request.getArticle(1))
