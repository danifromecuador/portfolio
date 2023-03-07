// hamburger icon /////////////////////////////////////////
const hamburger = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('.body');
const close = document.querySelector('.close');
const toolbarMobileMenu = document.querySelector('.toolbar-mobile-menu');

// see project ////////////////////////////////////////////
const seeProject = document.querySelectorAll('.see-project');
const projects = [
  {
    name: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid cupiditate vitae tempore temporibus quo, eum pariatur. Neque sed ab in et architecto? In cumque obcaecati temporibus incidunt. A assumenda explicabo perspiciatis soluta tempora facilis suscipit culpa quo, alias nesciunt omnis similique quisquam fuga consectetur error laboriosam! Quis, quos repellendus.',
    image: ['./images/pop-up-image.svg', './images/snapshot-portfolio.svg'],
    technologies: ['codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Codepen'],
    live: 'https://vgonma.github.io/personalportfolio/',
    github: 'https://github.com/Vgonma',
  }
];

// hamburger icon /////////////////////////////////////////
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
seeProject[0].addEventListener('click', () => {
  // create the new main div
  const div = document.createElement('div');
  div.style.width = '280px';
  div.style.height = '480px';
  div.style.backgroundColor = 'green';
  div.style.position = 'fixed';
  div.style.top = '50%';
  div.style.left = '50%';
  div.style.transform = 'translate(-50%, -50%)';
  div.textContent = 'This another is a new div! Just checking';
  document.body.appendChild(div);
});