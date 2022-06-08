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

const button = document.querySelectorAll('.nav-list_button');


// function showAboutMe(){
//     console.log('Yes');
// }
// const content = document.querySelector('.right-block__container');
// const aboutMe = document.createElement('div');
// aboutMe.innerHTML = `I am some man who was born in Belarus`;


// button.forEach(itemBut => {
//   itemBut.addEventListener('click', (event)=>{
//     if(event.target.classList.contains('one')){
//        content.append(aboutMe);
//     } else if(event.target.classList.contains('two')){
//         content.remove(aboutMe);  
//     } else if(event.target.classList.contains('tree')){
//         console.log('Third button');    
//     } else if(event.target.classList.contains('four')){
//         console.log('Sond button');    
//     } else if(event.target.classList.contains('five')){
//         console.log('S button');    
//     } else if(event.target.classList.contains('six')){
//         console.log('d button');    
//     }
    
//   })
// })

const me = {
    name: 'Nikita',
    age: 25,
  }
  console.log(me);