import { BAAS } from '../services';

import { routes } from '../router';

class PostDetailPage {
  async getPost (id) {
    const post = await BAAS.getPost(id);
    if (post === undefined) {
      window.location.assign('#!/404');
      return ``;
    }
    return `
      <div class="post">
        <h1>${post.title}</h1>
        <img src="${post.thumbnailUrl}">
        <div class="post-body">
          ${post.synopsis}
          ${post.body}
          <button id="post-btn"> <a href="#!${routes.BLOG}" data-navigo> <i class="fas fa-long-arrow-alt-left"></i> Terug</a> </button>
        </div>
      </div>
    `;
  }

  async render (params) {
    return `
    <div class="page page-blog">
    <div class="container animate__animated animate__fadeInUp">
      ${await this.getPost(params.id)}
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

export default PostDetailPage;
