import { routes } from '../router';

class Header {
  async render () {
    return `
      <header class="header">
        <div class="container">
          <div class="row header-row">
            <div class="col-sm-12 col-md-12 col-lg-2 col-xl-2 header-col">
              <div class="brand">
                <a href="${routes.HOME}" data-navigo>
                  <img class="logo-img" src="https://pgmgent-1920-students.github.io/case1-pgm-website-baas-pmg-jessvand/static/logos/images/pgm-logo.svg"/>
                </a>
              </div>
            </div>
            <div class="col-sm-12 col-md-10 col-lg-10 col-xl-10 header-col">
              <nav class="nav hamburger-nav-hidden">
                <ul class="nav__list">
                  <li class="nav__item"><a href="${routes.HOME}" data-navigo>Home</a></li>
                  <li class="nav__item"><a href="${routes.ABOUT}" data-navigo>Over PGM</a></li>
                  <li class="nav__item"><a href="${routes.CASES}" data-navigo>Cases</a></li>
                  <li class="nav__item"><a href="${routes.BLOG}" data-navigo>Nieuws</a></li>
                  <li class="nav__item"><a href="${routes.TEAM}" data-navigo>Team</a></li> 
                  <li class="nav__item"><a href="${routes.CONTACT}" data-navigo>Contact</a></li>
                </ul>
              </nav>
            </div>
            <div class="hamburger">
              <div class="burger"></div>
              <div class="burger"></div>
              <div class="burger"></div>
            </div>
          </div>
        </div>        
      </header>
    `;
  }

  async afterRender () {
    // Connect the listeners
    const hamburger = document.querySelector('.hamburger');
    const navElement = document.querySelector('.nav');
    const navList = document.querySelector('.nav__list');
    hamburger.addEventListener('click', (ev) => {
      navElement.classList.toggle('hamburger-nav-hidden');
    });

    navList.addEventListener('click', (ev) => {
      navElement.classList.toggle('hamburger-nav-hidden');
    });

    return this;
  }

  updateActiveLink (route) {
    const prevActiveMenuItemElement = document.querySelector(`.nav__item > a[class*="active"]`);
    if (prevActiveMenuItemElement) {
      prevActiveMenuItemElement.classList.remove('active');
    }
    const link = route.replace('#!', '');
    const menuItemElement = document.querySelector(`.nav__item > a[href*="${link}"]`);
    if (menuItemElement) {
      menuItemElement.classList.add('active');
    }
  }
}

export default Header;
