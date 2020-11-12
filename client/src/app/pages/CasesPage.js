import { BAAS } from '../services';

import { routes } from '../router';

class CasesPage {
  // constructor () {
  // }

  async getIntroCase (project) {
    return `
    <div class="row row-intro">
      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 intro-info-col">
        <div class="intro-info">
          <h2>${project.name}</h2>
          <p>${project.description}</p>
        </div>
        <button><a class="card__readmore" href="#!${routes.CASE_DETAIL.replace(':id', project.id)}">Meer info</a> <i class="fas fa-long-arrow-alt-right"></i> </button>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
        <div class="intro-image">
          <img src="${project.thumbnailUrl}">
        </div>
      </div>
    </div>
    `;
  }

  async getCases (cases) {
    return cases.map(post => `
    <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 card-col animate__animated animate__fadeInUp" data-subject="${post.tag}">
      <div class="card">
        <a class="card__readmore" href="#!${routes.CASE_DETAIL.replace(':id', post.id)}">
          <div class="card-image">
            <img src="${post.thumbnailUrl}">
          </div>
          <h2>${post.name}</h2>
        </a>
      </div>
    </div>
    `).join('');
  }

  async render () {
    const cases = await BAAS.getCases();

    return `
    <div class="page page-cases">
      <div class="container">
        <div class="section-intro">
          ${await this.getIntroCase(cases[0])}
        </div>
        <div class="section-content">
          <h2 class="section-title">Meer Cases</h2>
          <div class="filter">
            <label for="subject">Vak:</label>
            <select id="subject">
              <option value="all">Alle Cases</option>
              <option value="Webpgm">Web Programming</option>
              <option value="UiUx">UI/UX Prototyping</option>
              <option value="AtWork">@Work</option>
            </select>
            </div>
          <div class="row section-content-row">
            ${await this.getCases(cases.slice(1, cases.length))}
          </div>
        </div>
      </div> 
    </div>
    `;
  }

  async afterRender () {
    // afterRender all components on the page
    const filterInput = document.querySelector('#subject');
    const caseCard = document.querySelectorAll('.card-col');

    filterInput.addEventListener('change', (ev) => {
      caseCard.forEach((card) => {
        if (filterInput.value === card.dataset.subject || filterInput.value === 'all') {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });

    // Before the rendering of the page
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

export default CasesPage;
