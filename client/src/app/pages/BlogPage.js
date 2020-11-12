import { BAAS } from '../services';

import { routes } from '../router';

class BlogPage {
  // constructor () {
  // }

  async getIntroPost (id) {
    const post = await BAAS.getPost(id);
    return `
    <div class="row row-intro">
      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 intro-info-col">
        <div class="intro-info">
          <h2>${post.title}</h2>
          <p>${post.synopsis}</p>
        </div>
        <button> <a class="card__readmore" href="#!${routes.POST_DETAIL.replace(':id', post.id)}">Read more</a> <i class="fas fa-long-arrow-alt-right"></i> </button>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
        <div class="intro-image">
          <img src="${post.thumbnailUrl}">
        </div>
      </div>
    </div>
    `;
  }

  async getPosts () {
    const posts = await BAAS.getPosts();
    return posts.map(post => `
    <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 card-col animate__animated animate__fadeInUp">
      <div class="card">
        <a class="card__readmore" href="#!${routes.POST_DETAIL.replace(':id', post.id)}">
          <div class="card-image">
            <img src="${post.thumbnailUrl}">
          </div>
          <h2>${post.title}</h2>
        </a>
      </div>
    </div>
    `).slice(1, posts.length).join('');
  }

  async render () {
    return `
    <div class="page page-blog">
      <div class="container">
        <div class="section-intro">
          ${await this.getIntroPost('10737437-307e-4232-b687-b03a0d7cfa20')}
        </div>
        <div class="section-content">
          <h2 class="section-title">Meer Nieuws</h2>
          <div class="row section-content-row">
            ${await this.getPosts()}
          </div>
        </div>
      </div> 
    </div>
    `;
  }

  async afterRender () {
    // afterRender all components on the page

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

export default BlogPage;
