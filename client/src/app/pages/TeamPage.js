import { BAAS } from '../services';

import { routes } from '../router';

class TeamPage {
  async getStudents () {
    const studentsData = await BAAS.getStudents();
    return studentsData.map(student => `
    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3 student-card animate__animated animate__fadeInUp" data-year="${student.year}">
      <a href="#!${routes.STUDENT_DETAIL.replace(':id', student.id)}">
        <img src="${student.thumbnailUrl}">
        <div class="student-card-name">
          <p>${student.name}</p>
        </div>
      </a>
    </div>
    `).join('');
  }

  async render () {
    return `
      <div class="page page--team">
        <div class="container">
          <div class="staff-container">
          <h2>Docenten</h2>
          <div class="staff-container-images">
            <img id="staffMembers" src="https://pgmgent-1920-students.github.io/case1-pgm-website-baas-pmg-jessvand/static/staff/images/staffMembers.jpg">
            <img id="staffTags" src="https://pgmgent-1920-students.github.io/case1-pgm-website-baas-pmg-jessvand/static/staff/images/staffTags.png">
          </div>
          </div>
          <div class="students-container">
            <div class="students-container">
              <h2>Studenten</h2>
              <div class="filter">
                <label for="year">Schooljaar:</label>
                <select id="year">
                  <option value="all">Alle Studenten</option>
                  <option value="2019-2020">2019 - 2020</option>
                  <option value="2020-2021">2020 - 2021</option>
                  <option value="2021-2022">2021 - 2022</option>
                </select>
              </div>
              <div class="container">
                <div class="row">
                  ${await this.getStudents()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  async afterRender () {
    // Connect the listeners
    const filterInput = document.querySelector('#year');
    const studentCard = document.querySelectorAll('.student-card');

    filterInput.addEventListener('change', (ev) => {
      studentCard.forEach((sc) => {
        if (filterInput.value === sc.dataset.year || filterInput.value === 'all') {
          sc.classList.remove('hidden');
        } else {
          sc.classList.add('hidden');
        }
      });
    });
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

export default TeamPage;
