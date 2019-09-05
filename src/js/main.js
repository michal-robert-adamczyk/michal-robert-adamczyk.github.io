"use strict";

console.log(`Hello world!`);

const list = document.querySelector('.projects-list--js');

fetch('https://api.github.com/users/michal-robert-adamczyk/repos')
    .then(resp => resp.json())
    .then(resp => {
        const repos = resp;
        for (const repo of repos) {
            const { description, homepage, html_url, name, updated_at } = repo;
            list.innerHTML += `
            <li class="project">
            <div class="project__container">
              <img class="project__logo" src="assets/img/GitHub project.svg" alt="">
              <h3 class="project__title">${name}</h3>
              ${
                description ? `<p class="projects__description">${description} - ${homepage} </p>` : 'No description :('
              }
              
              </div>
              <div class="project__footer">
              <p>Last update ${updated_at}</p>
              ${
                homepage ? `<a class="project__link project__link--demo" href="${homepage}" target="_blank" rel="nofollow noreferrer" title="Demo: ${name}.">Demo</a>` : ''
              }
                
                <a class="project__link project__link--code" href="${html_url}" target="_blank" rel="nofollow noreferrer" title="Source code: ${name}.">GitHub</a>
              </div>
          </li>


    `;
    console.log(repos);
  }
    })
    .catch(err => {
        console.log(err);
    })