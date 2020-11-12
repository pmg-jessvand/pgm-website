import { BAAS } from '../services';

import { routes } from '../router';

class CaseDetailPage {
  async getCase (id) {
    const post = await BAAS.getCase(id);
    if (post === undefined) {
      window.location.assign('#!/404');
      return ``;
    }
    return `
    <div class="section section-intro">
      <div class="row row-intro">
        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 intro-info-col">
          <div class="intro-info">
            <h2 class="case-title">${post.name}</h2>
            <p>${post.description}</p>
          </div>
          <button><a class="card__readmore" href="${post.websiteUrl}" target="_blank">Bekijk website </a> <i class="fas fa-long-arrow-alt-right"></i> </button>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div class="intro-image">
            <img src="${post.thumbnailUrl}">
          </div>
        </div>
      </div>
    </div>
    <div class="section section-content">
      <div class="row row-intro">
        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 case-content-col">
          <video src="${post.video}" autoplay loop controls></video>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 case-content-col">
          <img src="${post.image}">
        </div>
        <button id="case-btn"> <a href="#!${routes.CASES}" data-navigo> <i class="fas fa-long-arrow-alt-left"></i> Terug</a> </button>
      </div>
    </div>
    `;
  }

  async render (params) {
    return `
    <div class="case-detail">
      <div class="container animate__animated animate__fadeInUp">
        ${await this.getCase(params.id)}
      </div>
    </div>
    `;
  }

  async afterRender () {
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

export default CaseDetailPage;
