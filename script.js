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
const seeProject = document.querySelectorAll('.see-project');
const melanie = document.querySelector('.melanie');
const html = `<div class="popup-window">
<div class="pop-image-and-close">
  <img src="images/icons/pop-close.svg" alt="exit" class="pop-close hidden"></img>
</div>
<div class="pop-project-name">Keeping track of hundreds of components</div>
<div class="pop-languages">
  <h4 class="pop-languages-1">Ruby on rails</h4>
  <h4 class="pop-languages-2">css</h4>
  <h4 class="pop-languages-3">JavScript</h4>
</div>
<p class="pop-lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
<div class="pop-see-live-and-source">
  <a href="https://danifromecuador.github.io/portfolio/" class="pop-see-live">
    <h3 class="pop-see-live-text">See live</h3>
    <img src="images/icons/see-live.svg" alt="" class="pop-see-live-image">
  </a>
  <a href="https://github.com/danifromecuador/portfolio" class="pop-see-source">
    <h3 class="pop-see-source-text">See Source</h3>
    <img src="images/icons/see-source.svg" alt="" class="pop-see-source-image">
  </a>
</div>
</div>`;

for (let i = 0; i < 6; i += 1) {
  seeProject[i].addEventListener('click', () => {
    melanie.innerHTML = html;
    const popClose = document.querySelector('.pop-close');
    const popupWindow = document.querySelector('.popup-window');
    popClose.addEventListener('click', () => {
      popupWindow.classList.toggle('hidden');
    });
  });
}
