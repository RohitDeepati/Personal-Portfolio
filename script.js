let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const sr = ScrollReveal ({
     distance : '60px',
     duration: 1500,
     reset: true
});

sr.reveal('.home-text',{delay:200, origin:'top'})
sr.reveal('.about, .projects, .education, .contact',{
     delay:200, origin:'top'
})