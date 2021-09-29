const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const hamburger = document.querySelector('#hamburger-svg')


navToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('nav-open')
    if(document.body.classList.contains('nav-open')){
        hamburger.src="./images/icon-close.svg"
    }
    else{
        hamburger.src="./images/icon-hamburger.svg"
    }
  })
  
  navLinks.forEach(link => {
    link.addEventListener('click', () =>{
    document.body.classList.remove('nav-open');
    hamburger.src="./images/icon-hamburger.svg"
    })
  })