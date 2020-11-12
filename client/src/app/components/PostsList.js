import { BAAS } from '../services';

import { routes } from '../router';

class PostsList {
  constructor (n = null) {
    this.n = n;
  }

  async getPosts () {
    let posts = await BAAS.getPosts();
    if (this.n !== null) {
      posts = posts.slice(0, this.n);
    }
    return posts.map(post => `
    <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 card-col">
      <div class="card">
        <a class="card__readmore" href="#!${routes.POST_DETAIL.replace(':id', post.id)}">
          <div class="card-image">
            <img src="${post.thumbnailUrl}">
          </div>
          <h2>${post.title}</h2>
        </a>
      </div>
    </div>  
    `).join('');
  }

  async render () {
    return `
      <div class="row section-content-rowt">
        ${await this.getPosts()}     
      </div>
    `;
  }

  async afterRender () {
    // Connect the listeners
    return this;
  }
}

export default PostsList;
