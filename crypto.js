/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*===================== Scroll Reveal animation=========*/

const sr = ScrollReveal({
    distance: '90px',
    duration: 1800,
})

sr.reveal(`.home-data`,{origin:'top', delay:300})
sr.reveal(`.home-img`,{origin:'botton', delay:500})
sr.reveal(`.home-footer`,{origin:'bottom', delay:600})