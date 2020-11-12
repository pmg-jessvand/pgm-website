const DOMAIN = 'https://pgmgent-1920-students.github.io/case1-pgm-website-baas-pmg-jessvand';

class BAAS {
  static getHome = async () => {
    const response = await fetch(`${DOMAIN}/data/home/index.json`);
    const jsonData = await response.json();
    return jsonData;
  }

  static getAbout = async (id) => {
    const response = await fetch(`${DOMAIN}/data/about/index.json`);
    const jsonData = await response.json();
    return jsonData.find(post => post.id === id);
  }

  static getCurriculum = async () => {
    const response = await fetch(`${DOMAIN}/data/curriculum/index.json`);
    const jsonData = await response.json();
    return jsonData;
  }

  static getPosts = async () => {
    const response = await fetch(`${DOMAIN}/data/blog/index.json`);
    const jsonData = await response.json();
    return jsonData;
  }

  static getPost = async (id) => {
    const response = await fetch(`${DOMAIN}/data/blog/index.json`);
    const jsonData = await response.json();
    return jsonData.find(post => post.id === id);
  }

  static getCases = async () => {
    const response = await fetch(`${DOMAIN}/data/cases/index.json`);
    const jsonData = await response.json();
    return jsonData;
  }

  static getCase = async (id) => {
    const response = await fetch(`${DOMAIN}/data/cases/index.json`);
    const jsonData = await response.json();
    return jsonData.find(post => post.id === id);
  }

  static getContact = async () => {
    const response = await fetch(`${DOMAIN}/data/contact/index.json`);
    const jsonData = await response.json();
    return jsonData;
  }

  static getStudents = async () => {
    const response = await fetch(`${DOMAIN}/data/students/index.json`);
    const jsonData = await response.json();
    return jsonData;
  }

  static getStudent = async (id) => {
    const response = await fetch(`${DOMAIN}/data/students/index.json`);
    const jsonData = await response.json();
    return jsonData.find(post => post.id === id);
  }
}

export default BAAS;
