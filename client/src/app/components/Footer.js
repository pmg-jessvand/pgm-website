// import { routes } from '../router';

class Footer {
  async render () {
    return `
      <footer class="footer">
        <div class="container">
          <div class="row footer-row">
            <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 footer-col footer-col-info">
              <p>www.pgm.gent is een website van de opleiding graduaat programmeren van Arteveldehogeschool.</p>
              <p>Industrieweg 232, 9030 Mariakerke (Gent)<br/>+32 9 234 86 00</p>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 footer-col footer-col-socials">
              <ul class="socials-list">
                <li class="socials-list-item"><a href="https://github.com/gdmgent" target="_blank"><i class="fab fa-github"></i></a></li>
                <li class="socials-list-item"><a href="https://www.linkedin.com/company/graduaat-programmeren" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                <li class="socials-list-item"><a href="https://www.facebook.com/GrafischeendigitalemediaArteveldehogeschool/" target="_blank"><i class="fab fa-facebook"></i></a></li>
                <li class="socials-list-item"><a href="https://twitter.com/arteveldegdm" target="_blank"><i class="fab fa-twitter"></i></a></li>
              </ul>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 footer-col footer-col-logo">
              <a href="https://www.arteveldehogeschool.be/opleidingen/graduaat/programmeren" target="_blank"><img src="https://pgmgent-1920-students.github.io/case1-pgm-website-baas-pmg-jessvand/static/logos/images/ahs_logo.svg"/></a>
            </div>
          </div>
        </div>      
      </footer>
    `;
  }

  async afterRender () {
    // Connect the listeners
    return this;
  }

  updateActiveLink (route) {
    const prevActiveMenuItemElement = document.querySelector(`.footer-section__item > a[class*="active"]`);
    if (prevActiveMenuItemElement) {
      prevActiveMenuItemElement.classList.remove('active');
    }
    const link = route.replace('#!', '');
    const menuItemElement = document.querySelector(`.footer-section__item > a[href*="${link}"]`);
    if (menuItemElement) {
      menuItemElement.classList.add('active');
    }
  }
}

export default Footer;
