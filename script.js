// MENU MOBILE ////////////////////////////////////////////////////////////////////////////////////
const hamburger = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('.body');
const close = document.querySelector('.close');
const toolbarMobileMenu = document.querySelector('.toolbar-mobile-menu');

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

// MODAL WINDOW ///////////////////////////////////////////////////////////////////////////////////
const projects = [
  {
    image: 'images/icons/pop-close.svg',
    name: 'Keeping track of hundreds of components 1',
    languages: ['Ruby on Rails', 'css', 'JavaScript', 'Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid cupiditate vitae tempore temporibus quo, eum pariatur. Neque sed ab in et architecto? In cumque obcaecati temporibus incidunt. A assumenda explicabo perspiciatis soluta tempora facilis suscipit  culpa quo, alias nesciunt omnis similique quisquam fuga consectetur error laboriosam! Qui  s, quos repellendus.',
    live: 'https://danifromecuador.github.io/portfolio/',
    github: 'https://github.com/danifromecuador',
  },
  {
    image: 'images/icons/pop-close.svg',
    name: 'Keeping track of hundreds of components 2',
    languages: ['Ruby on Rails', 'css', 'JavaScript', 'Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid cupiditate vitae tempore temporibus quo, eum pariatur. Neque sed ab in et architecto? In cumque obcaecati temporibus incidunt. A assumenda explicabo perspiciatis soluta tempora facilis suscipit  culpa quo, alias nesciunt omnis similique quisquam fuga consectetur error laboriosam! Qui  s, quos repellendus.',
    live: 'https://danifromecuador.github.io/portfolio/',
    github: 'https://github.com/danifromecuador',
  },
  {
    image: 'images/icons/pop-close.svg',
    name: 'Keeping track of hundreds of components 3',
    languages: ['Ruby on Rails', 'css', 'JavaScript', 'Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid cupiditate vitae tempore temporibus quo, eum pariatur. Neque sed ab in et architecto? In cumque obcaecati temporibus incidunt. A assumenda explicabo perspiciatis soluta tempora facilis suscipit  culpa quo, alias nesciunt omnis similique quisquam fuga consectetur error laboriosam! Qui  s, quos repellendus.',
    live: 'https://danifromecuador.github.io/portfolio/',
    github: 'https://github.com/danifromecuador',
  },
  {
    image: 'images/icons/pop-close.svg',
    name: 'Keeping track of hundreds of components 4',
    languages: ['Ruby on Rails', 'css', 'JavaScript', 'Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid cupiditate vitae tempore temporibus quo, eum pariatur. Neque sed ab in et architecto? In cumque obcaecati temporibus incidunt. A assumenda explicabo perspiciatis soluta tempora facilis suscipit  culpa quo, alias nesciunt omnis similique quisquam fuga consectetur error laboriosam! Qui  s, quos repellendus.',
    live: 'https://danifromecuador.github.io/portfolio/',
    github: 'https://github.com/danifromecuador',
  },
  {
    image: 'images/icons/pop-close.svg',
    name: 'Keeping track of hundreds of components 5',
    languages: ['Ruby on Rails', 'css', 'JavaScript', 'Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid cupiditate vitae tempore temporibus quo, eum pariatur. Neque sed ab in et architecto? In cumque obcaecati temporibus incidunt. A assumenda explicabo perspiciatis soluta tempora facilis suscipit  culpa quo, alias nesciunt omnis similique quisquam fuga consectetur error laboriosam! Qui  s, quos repellendus.',
    live: 'https://danifromecuador.github.io/portfolio/',
    github: 'https://github.com/danifromecuador',
  },
  {
    image: 'images/icons/pop-close.svg',
    name: 'Keeping track of hundreds of components 6',
    languages: ['Ruby on Rails', 'css', 'JavaScript', 'Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid cupiditate vitae tempore temporibus quo, eum pariatur. Neque sed ab in et architecto? In cumque obcaecati temporibus incidunt. A assumenda explicabo perspiciatis soluta tempora facilis suscipit  culpa quo, alias nesciunt omnis similique quisquam fuga consectetur error laboriosam! Qui  s, quos repellendus.',
    live: 'https://danifromecuador.github.io/portfolio/',
    github: 'https://github.com/danifromecuador',
  },
];

const seeProject = document.querySelectorAll('.see-project');
const melanie = document.querySelector('.melanie');

for (let i = 0; i < 6; i += 1) {
  const html = `<div class="popup-window">
  <img class="pop-close-desk" src="images/icons/pop-close-desk.svg" alt="pop-close-desk">
  <div class="pop-image-and-close">
    <img src=${projects[i].image} alt="exit" class="pop-close hidden"></img>
  </div>
  <div class="pop-project-name">${projects[i].name}</div>
  <div class="pop-project-name-and-live-and-source-desk">
    <div class="pop-project-name-desk">${projects[i].name}</div>
    <div class="pop-see-live-and-source-desk">
      <a href=${projects[i].live} class="pop-see-live">
        <h3 class="pop-see-live-text">See live</h3>
        <img src="images/icons/see-live.svg" alt="" class="pop-see-live-image">
      </a>
      <a href=${projects[i].github} class="pop-see-source">
        <h3 class="pop-see-source-text">See Source</h3>
        <img src="images/icons/see-source.svg" alt="" class="pop-see-source-image">
      </a>
    </div>
  </div>
  <div class="pop-languages">
    <h4 class="pop-languages-1">${projects[i].languages[0]}</h4>
    <h4 class="pop-languages-2">${projects[i].languages[1]}</h4>
    <h4 class="pop-languages-3">${projects[i].languages[2]}</h4>
  </div>
  <div class="pop-languages-desk">
    <h4 class="pop-languages-1 desk">${projects[i].languages[3]}</h4>
    <h4 class="pop-languages-2 desk">${projects[i].languages[4]}</h4>
    <h4 class="pop-languages-3 desk">${projects[i].languages[5]}</h4>
    <h4 class="pop-languages-1 desk">${projects[i].languages[6]}</h4>
    <h4 class="pop-languages-2 desk">${projects[i].languages[7]}</h4>
    <h4 class="pop-languages-3 desk">${projects[i].languages[8]}</h4>
  </div>
  <p class="pop-lorem">${projects[i].description}</p>
  <div class="pop-see-live-and-source mobile">
    <a href=${projects[i].live} class="pop-see-live">
      <h3 class="pop-see-live-text">See live</h3>
      <img src="images/icons/see-live.svg" alt="" class="pop-see-live-image">
    </a>
    <a href=${projects[i].github} class="pop-see-source">
      <h3 class="pop-see-source-text">See Source</h3>
      <img src="images/icons/see-source.svg" alt="" class="pop-see-source-image">
    </a>
  </div>
  </div>`;
  seeProject[i].addEventListener('click', () => {
    const main = document.querySelector('.main');
    melanie.innerHTML = html;
    main.classList.toggle('blur');
    const popClose = document.querySelector('.pop-close');
    const popupWindow = document.querySelector('.popup-window');
    popClose.addEventListener('click', () => {
      popupWindow.classList.toggle('hidden');
      main.classList.toggle('blur');
    });
    const popCloseDesk = document.querySelector('.pop-close-desk');
    popCloseDesk.addEventListener('click', () => {
      popupWindow.classList.toggle('hidden');
      main.classList.toggle('blur');
    });
  });
}

// FORM VALIDATION ////////////////////////////////////////////////////////////////////////////////
const submit = document.querySelector('#submit');
const errorMessage = document.querySelector('#error-message');
submit.addEventListener('click', (event) => {
  const emailInput = document.querySelector('#email');
  const emailValue = emailInput.value;
  if (emailValue !== emailValue.toLowerCase()) {
    event.preventDefault();
    errorMessage.innerHTML = 'Please use only lowercase email addresses!';
    return false;
  }
  return true;
});

// PRESERVE DATA //////////////////////////////////////////////////////////////////////////////////
const userInput = document.querySelectorAll('.userData');
const form = document.querySelector('.form');
let data = {};

if (localStorage.getItem('userData')) {
  data = JSON.parse(localStorage.getItem('userData'));
  userInput.forEach((input) => {
    input.value = data[input.name];
  });
}

