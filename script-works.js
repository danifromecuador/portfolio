import recentWorks from './recent-works.js';

const recentWorksdiv = document.querySelector('.recent-works');

const recentWorksHtml = recentWorks.map((work) => {
  const tags = work.tags.map((tag) => `<li class="tag">${tag}</li>`).join('');
  return `<div class="card">
  <div class="img-${work.title}"></div>
  <div class="text-box">
    <img src="" alt="">
    <div class="project-title">${work.title}</div>
    <ul class="tags">
      ${tags}
    </ul>
    <a class="see-project" href=${work.live} target="_blank" rel="noopener">See Project</a>
  </div>  
</div>`;
}).join('');

recentWorksdiv.innerHTML = recentWorksHtml;
