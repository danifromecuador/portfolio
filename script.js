// hamburger icon /////////////////////////////////////////
const hamburger = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('.body');
const close = document.querySelector('.close');
const toolbarMobileMenu = document.querySelector('.toolbar-mobile-menu');

// see project ////////////////////////////////////////////
const seeProject = document.querySelectorAll('.see-project');


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
  const div = document.createElement('div');
  
  // Set the width and height styles of the div
  div.style.width = '280px';
  div.style.height = '480px';
  div.style.backgroundColor = 'green';
  div.style.position = 'fixed';
  div.style.top = '50%';
  div.style.left = '50%';
  div.style.transform = 'translate(-50%, -50%)';
  
  
  // Add some content to the div
  div.textContent = 'This is a new div!';
  
  // Add the div to the page
  document.body.appendChild(div);
  
});