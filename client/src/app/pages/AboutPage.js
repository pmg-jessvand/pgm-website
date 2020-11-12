import { BAAS } from '../services';

class AboutPage {
  async getAboutIntro (id) {
    const aboutSection = await BAAS.getAbout(id);
    return `
    <div class="row row-intro">
      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 intro-info-col">
        <div class="intro-info">
          <h2>${aboutSection.title}</h2>
          <p>${aboutSection.body}</p>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
        <div class="intro-image">
          <iframe width="560" height="315" src="${aboutSection.videoUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    `;
  }

  async getAboutSection (id) {
    const aboutSection = await BAAS.getAbout(id);
    return `
    <div class="row row-intro">
      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
        <div class="intro-image">
          <img src="${aboutSection.thumbnailUrl}"</img>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 intro-info-col">
      <div class="intro-info">
        <h2>${aboutSection.title}</h2>
        ${aboutSection.body}
        <button> <a class="card__readmore" href="https://forms.gle/DYrDNj4SfdtgFJ4eA" target="_blank">Samenwerken!</a> <i class="fas fa-long-arrow-alt-right"></i> </button>
      </div>
    </div>
    </div>
    `;
  }

  async getCurriculum () {
    const curriculmData = await BAAS.getCurriculum();
    return curriculmData.map(curr => `
    <div class="col-6 col-md-6 col-lg-3 col-xl-3 curr-option">
      <input type="radio" id="${curr.id}" name="curr-option" value="${curr.body}"/>
      <label for="${curr.id}" class="curr-option-label"> ${curr.title}</label>
    </div>
    `).join('');
  }

  async render () {
    return `
    <div class="page page-about">
      <div class="container">
        <div class="section-intro">
          ${await this.getAboutIntro('about-intro')}
        </div>
        <div class="section-curriculum">
          <div class="container">
            <div class="section-curriculum-hero">
              <img src="https://pgmgent-1920-students.github.io/case1-pgm-website-baas-pmg-jessvand/static/curriculum/images/curriculm.jpg">
            </div>
            <div class="section-curriculum-info">
              <div class="container">
                <div class="row curr-container">
                ${await this.getCurriculum()}
                </div>
                <div class="curr-option-body"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-at-work section-intro spacing">
          ${await this.getAboutSection('werkplekleren')}
        </div>
      </div> 
    </div>
    `;
  }

  async afterRender () {
    // afterRender all components on the page
    const bodyElement = document.querySelector('.curr-option-body');
    const labelElement = document.querySelector('.curr-container');

    labelElement.addEventListener('change', (ev) => {
      const target = ev.target.closest('input');
      bodyElement.innerHTML = `
      <div class="curr-option-body-container animate__animated animate__fadeIn">${target.value}</div>
      `;
    });

    return this;

    // Before the rendering of the page
    // return this;
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

export default AboutPage;
