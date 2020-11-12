import { routes } from '../router';

class NotFoundPage {
  async render () {
    return `
      <div class="page page--404">
        <div class="container not-found-container">
          <h2>Oeps, er ging iets mis ...</h2>
          <h1>404</h1>
          <a href="#!${routes.HOME}">Terug naar home</a>
        </div>
      </div>
    `;
  }
}

export default NotFoundPage;
