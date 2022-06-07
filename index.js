const fixBlockHead = document.createElement('header');
const body = document.querySelector('.body');

const main = document.querySelector('.main-container');

fixBlockHead.className = 'header';
body.prepend(fixBlockHead);

const containerNamePage = document.createElement('div');
containerNamePage.className = 'header_container';
const namePage = document.createElement('h1');

fixBlockHead.prepend(containerNamePage);
containerNamePage.prepend(namePage);
namePage.innerHTML = `Junior Front-end develoter`;
