import { routes } from '../router';

import { CaseList, PostsList } from '../components';
import { BAAS } from '../services';

class HomePage {
  constructor () {
    this.compPostsList = new PostsList(4);
    this.compCaseList = new CaseList(4);
  }

  async getHomeData () {
    const homeArr = await BAAS.getHome();
    const homeData = homeArr[0];
    return `
    <div class="row row-intro">
    <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 intro-info-col">
      <div class="intro-info">
        <h2>${homeData.title}</h2>
        <p>${homeData.body}</p>
        <button id="post-btn"> <a href="#!${routes.ABOUT}" data-navigo> <i class="fas fa-long-arrow-alt-right"></i> Meer Info</a> </button>
      </div>
    </div>
    <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
      <div class="intro-image">
        <img src="${homeData.img}">
      </div>
    </div>
  </div>
    `;
  }

  async render () {
    this.getHomeData();
    return `
      <div class="page page-home">
        <div class="container">
            <div class="section-intro">
              ${await this.getHomeData()}
            </div>
            <div class="section-content cases">
              <h2 class="section-title">Cases</h2>
              <div class="row section-content-row">
                ${await this.compCaseList.render()}
              </div>
              <button id="post-btn"> <a href="#!${routes.CASES}" data-navigo> <i class="fas fa-long-arrow-alt-right"></i> Meer Cases</a> </button>
          </div>
            <div class="section-content nieuws">
              <h2 class="section-title">Nieuws</h2>
              <div class="row section-content-row">
                ${await this.compPostsList.render()}
              </div>
              <button id="post-btn"> <a href="#!${routes.BLOG}" data-navigo> <i class="fas fa-long-arrow-alt-right"></i> Meer Nieuws</a> </button>
          </div>
        </div> 
      </div>
    `;
  }

  async afterRender () {
    // afterRender all components on the page
    this.compPostsList.afterRender();
    this.compCaseList.afterRender();

    // Connect the listeners
    return this;
  }

  async mount () {
    // Before the rendering of the page
    return this;
  }

  async unmount () {
    // After leaving the page
    return this;
  }
}

export default HomePage;
