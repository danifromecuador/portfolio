// hamburger icon /////////////////////////////////////////
const hamburger = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('.body');
const close = document.querySelector('.close');
const toolbarMobileMenu = document.querySelector('.toolbar-mobile-menu');
const projects = [
  {
    image: 'images/icons/pop-close.svg',
    name: 'Project 1',
    languages: ['Ruby on Rails', 'css', 'JavaScript', 'html'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid cupiditate vitae tempore temporibus quo, eum pariatur. Neque sed ab in et architecto? In cumque obcaecati temporibus incidunt. A assumenda explicabo perspiciatis soluta tempora facilis suscipit  culpa quo, alias nesciunt omnis similique quisquam fuga consectetur error laboriosam! Qui  s, quos repellendus.',
    live: 'https://danifromecuador.github.io/portfolio/',
    github: 'https://github.com/danifromecuador',
  },
  {
    image: 'images/icons/pop-close.svg',
    name: 'Project 2',
    languages: ['Ruby on Rails', 'css', 'JavaScript', 'html'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid cupiditate vitae tempore temporibus quo, eum pariatur. Neque sed ab in et architecto? In cumque obcaecati temporibus incidunt. A assumenda explicabo perspiciatis soluta tempora facilis suscipit  culpa quo, alias nesciunt omnis similique quisquam fuga consectetur error laboriosam! Qui  s, quos repellendus.',
    live: 'https://danifromecuador.github.io/portfolio/',
    github: 'https://github.com/danifromecuador',
  },
  {
    image: 'images/icons/pop-close.svg',
    name: 'Project 3',
    languages: ['Ruby on Rails', 'css', 'JavaScript', 'html'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid cupiditate vitae tempore temporibus quo, eum pariatur. Neque sed ab in et architecto? In cumque obcaecati temporibus incidunt. A assumenda explicabo perspiciatis soluta tempora facilis suscipit  culpa quo, alias nesciunt omnis similique quisquam fuga consectetur error laboriosam! Qui  s, quos repellendus.',
    live: 'https://danifromecuador.github.io/portfolio/',
    github: 'https://github.com/danifromecuador',
  },
  {
    image: 'images/icons/pop-close.svg',
    name: 'Project 4',
    languages: ['Ruby on Rails', 'css', 'JavaScript', 'html'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid cupiditate vitae tempore temporibus quo, eum pariatur. Neque sed ab in et architecto? In cumque obcaecati temporibus incidunt. A assumenda explicabo perspiciatis soluta tempora facilis suscipit  culpa quo, alias nesciunt omnis similique quisquam fuga consectetur error laboriosam! Qui  s, quos repellendus.',
    live: 'https://danifromecuador.github.io/portfolio/',
    github: 'https://github.com/danifromecuador',
  },
  {
    image: 'images/icons/pop-close.svg',
    name: 'Project 5',
    languages: ['Ruby on Rails', 'css', 'JavaScript', 'html'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid cupiditate vitae tempore temporibus quo, eum pariatur. Neque sed ab in et architecto? In cumque obcaecati temporibus incidunt. A assumenda explicabo perspiciatis soluta tempora facilis suscipit  culpa quo, alias nesciunt omnis similique quisquam fuga consectetur error laboriosam! Qui  s, quos repellendus.',
    live: 'https://danifromecuador.github.io/portfolio/',
    github: 'https://github.com/danifromecuador',
  },
  {
    image: 'images/icons/pop-close.svg',
    name: 'Project 6',
    languages: ['Ruby on Rails', 'css', 'JavaScript', 'html'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid cupiditate vitae tempore temporibus quo, eum pariatur. Neque sed ab in et architecto? In cumque obcaecati temporibus incidunt. A assumenda explicabo perspiciatis soluta tempora facilis suscipit  culpa quo, alias nesciunt omnis similique quisquam fuga consectetur error laboriosam! Qui  s, quos repellendus.',
    live: 'https://danifromecuador.github.io/portfolio/',
    github: 'https://github.com/danifromecuador',
  },
];

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
const seeProject = document.querySelectorAll('.see-project');
const melanie = document.querySelector('.melanie');

for (let i = 0; i < 6; i += 1) {
  const html = `<div class="popup-window">
  <div class="pop-image-and-close">
    <img src=${projects[i].image} alt="exit" class="pop-close hidden"></img>
  </div>
  <div class="pop-project-name">${projects[i].name}</div>
  <div class="pop-languages">
    <h4 class="pop-languages-1">${projects[i].languages[0]}</h4>
    <h4 class="pop-languages-2">${projects[i].languages[1]}</h4>
    <h4 class="pop-languages-3">${projects[i].languages[2]}</h4>
  </div>
  <p class="pop-lorem">${projects[i].description}</p>
  <div class="pop-see-live-and-source">
    <a href=${projects[i].live} class="pop-see-live">
      <h3 class="pop-see-live-text">See live</h3>
      <img src="images/icons/see-live.svg" alt="" class="pop-see-live-image">
    </a>
    <a href=${projects[i].source} class="pop-see-source">
      <h3 class="pop-see-source-text">See Source</h3>
      <img src="images/icons/see-source.svg" alt="" class="pop-see-source-image">
    </a>
  </div>
  </div>`;
  seeProject[i].addEventListener('click', () => {
    melanie.innerHTML = html;
    const popClose = document.querySelector('.pop-close');
    const popupWindow = document.querySelector('.popup-window');
    popClose.addEventListener('click', () => {
      popupWindow.classList.toggle('hidden');
    });
  });
}
