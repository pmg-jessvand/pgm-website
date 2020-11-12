import { BAAS } from '../services';

import { routes } from '../router';

class StudentDetailPage {
  async getStudent (id) {
    const student = await BAAS.getStudent(id);
    return `
    <div class="section section-intro">
    <div class="row row-intro">
      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 intro-info-col">
        <div class="intro-info">
          <h2 class="student-name">${student.name}</h2>
          <p class="interests">${student.interests}</p>
          <p class="favourite">Favoriete vak: <strong>${student.favourite}</strong></p>
          <div class="student-about">
            <p>${student.about}</p>
          </div>
          <h3 class="quote">${student.quote}</h3>
          <button id="student-btn"> <a href="#!${routes.TEAM}" data-navigo> <i class="fas fa-long-arrow-alt-left"></i> Terug</a> </button>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
        <div class="intro-image">
          <img src="${student.thumbnailUrl}">
        </div>
      </div>
    </div>
  </div>
    `;
  }

  async render (params) {
    return `
    <div class="page page-student-detail">
    <div class="container">
      ${await this.getStudent(params.id)}
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

export default StudentDetailPage;
