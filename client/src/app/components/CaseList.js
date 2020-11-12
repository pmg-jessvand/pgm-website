import { BAAS } from '../services';

import { routes } from '../router';

class CaseList {
  constructor (n = null) {
    this.n = n;
  }

  async getCases () {
    let posts = await BAAS.getCases();
    if (this.n !== null) {
      posts = posts.slice(0, this.n);
    }
    return posts.map(post => `
    <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 card-col">
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
    return `
      <div class="row section-content-rowt">
        ${await this.getCases()}     
      </div>
    `;
  }

  async afterRender () {
    // Connect the listeners
    return this;
  }
}

export default CaseList;
