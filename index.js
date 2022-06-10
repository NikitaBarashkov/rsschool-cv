const fixBlockHead = document.createElement('header');
const body = document.querySelector('.body');

fixBlockHead.className = 'header';
body.prepend(fixBlockHead);

const containerNamePage = document.createElement('div');
containerNamePage.className = 'header_container';
const namePage = document.createElement('h1');

fixBlockHead.prepend(containerNamePage);
containerNamePage.prepend(namePage);
namePage.innerHTML = `Junior Front-end develoter`;

const buttons = document.querySelectorAll('.nav-list_button');
const content = document.querySelectorAll('.content');

function closeContent(){
    content.forEach(elem =>{
        elem.classList.add('close');
    })
}

function removeActiveButton(){
    buttons.forEach(but =>{
        but.classList.remove('active');
    })
}

buttons.forEach(but =>{
  but.addEventListener('click', (event) =>{
    if(event.target === buttons[0]){
      closeContent();
      removeActiveButton()
      event.target.classList.add('active');
      content[0].classList.remove('close');

    } else if(event.target === buttons[1]){
      closeContent();
      removeActiveButton()
      event.target.classList.add('active');
      content[1].classList.toggle('close');
    } else if(event.target === buttons[2]){
        closeContent();
        removeActiveButton()
        event.target.classList.add('active');
        content[2].classList.toggle('close');
    } else if(event.target === buttons[3]){
        closeContent();
        removeActiveButton()
        event.target.classList.add('active');
        content[3].classList.toggle('close');
    } else if(event.target === buttons[4]){
        closeContent();
        removeActiveButton()
        event.target.classList.add('active');
        content[4].classList.toggle('close');
    } else if(event.target === buttons[5]){
        closeContent();
        removeActiveButton()
        event.target.classList.add('active');
        content[5].classList.toggle('close');
    }
  })
})

