import { BAAS } from '../services';

class ContactPage {
  async getContactPersons () {
    const contactData = await BAAS.getContact();
    const { contactPersons } = contactData;
    return contactPersons.map(person => `
    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div class="contact-person">
            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 contact-person-img">
                <div class="person-img"><img src="${person.image}"/></div>
                <h2 class="contact-person-name">${person.firstName}<h2>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 contact-person-info">
                <p>${person.function}</p>
                <p>${person.email}</p>
            </div>
        </div>
    </div>
    `).join('');
  }

  async getContactInfo () {
    const contactData = await BAAS.getContact();
    const contactInfo = contactData;
    return `
    <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 intro-info-col">
        <div class="intro-info">
            <h2>${contactInfo.place}</h2>
            <p>${contactInfo.adress}</p>
            <p>${contactInfo.email}</p>
            <p>${contactInfo.phone}</p>
        </div>
    </div>
    <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
        <div class="intro-image">
            <img src="${contactInfo.locationImg}">
        </div>
    </div>
    `;
  }

  async render () {
    return `
    <div class="page page-contact">
      <div class="container">
          <div class="section-intro">
              <div class="row row-intro">
                  ${await this.getContactInfo()}
              </div>
          </div>
          <div class="section-content">
              <h2 class="section-title">Contactpersonen</h2>
              <div class="row row-content-row">
                  ${await this.getContactPersons()}
              </div>
              <div class="row row-content-row form-row">
                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  <div class="form-info">
                    <p>Heb je vragen?<br/> Stuur ons gerust een mailtje!</p>
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  <div class="form-container">
                    <form>
                      <input type="text" id="name" name="name" placeholder="Naam"><br>
                      <input type="text" id="email" name="email" placeholder="E-mail"><br>
                      <textarea type="text" id="msg" name="msg" placeholder="Bericht"></textarea>
                      <button>Verzend <i class="fas fa-long-arrow-alt-right"></i></button>
                    </form>
                  </div>
                </div>
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

export default ContactPage;
