// hamburger icon /////////////////////////////////////////
const hamburger = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('.body');
const close = document.querySelector('.close');
const toolbarMobileMenu = document.querySelector('.toolbar-mobile-menu');
// const projects = [
//   {
//     name: 'Project 1',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid cupiditate
//  vitae tempore temporibus quo, eum pariatur. Neque sed ab in et architecto? In cumque obcaec
//  ati temporibus incidunt. A assumenda explicabo perspiciatis soluta tempora facilis suscipit
//   culpa quo, alias nesciunt omnis similique quisquam fuga consectetur error laboriosam! Qui
//   s, quos repellendus.',
// image: ['images/backgrounds/snapshoot-mobile.svg', 'images/backgrounds/snapshoot-desktop.svg'],
//     technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
//     live: 'https://danifromecuador.github.io/portfolio/',
//       github: 'https://github.com/danifromecuador',
//   },
// ];
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden'); // shows the mobile menu
  body.classList.toggle('overflow');
});

close.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  body.classList.toggle('overflow');
});

toolbarMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  body.classList.toggle('overflow');
});

// see project ////////////////////////////////////////////
// const seeProject = document.querySelectorAll('.see-project');
// seeProject[0].addEventListener('click', () => {
//   alert('See Project');
// });