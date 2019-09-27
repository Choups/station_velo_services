/////  MODAL FORM ///////////////////////////////////////

/* DOM shortcuts */
const buttonForm = document.getElementById('button-contact');
const buttonSend = document.getElementById('button-send');
const modalForm = document.getElementById('modal');

/* Function */
const modalFormFunction = () => {
    if (modalForm.style.display === "" || modalForm.style.display === "none") {
        modalForm.style.display = "block";        
    } else {
        modalForm.style.display = "none";
    }
 };

/* EventListener */
buttonForm.addEventListener('click', modalFormFunction);
buttonSend.addEventListener('click', modalFormFunction);
/////////////////////////////////////////////////////////



///// TOP/BOTTOM NAVBAR AFTER SCROLLING 100VH ///////////

/* DOM shortcuts */
const navBar = document.getElementById('nav');
const carousel = document.getElementById('carousel');
const foot = document.getElementById('foot');
const logoDefault = document.getElementById('logo');
const logoUp = document.getElementById('logo-top');

/* Function */
const toggleNavbar = () => {
    if (window.scrollY >= carousel.offsetHeight){
        navBar.style.marginTop = `${carousel.offsetHeight - 40}px`;
        foot.style.marginBottom = '40px';
        navBar.style.transitionDuration = '1s';
        navBar.style.boxShadow = '0 -0.3em 0.5em black';
        logoDefault.style.display = 'none';
        logoUp.style.display = 'flex';
    } else{
        navBar.style.marginTop = '';
        navBar.style.boxShadow = '0 0.3em 0.5em teal';
        logoDefault.style.display = 'flex';
        logoUp.style.display = 'none';
    }
}

/* EventListener */
document.addEventListener('scroll', toggleNavbar);
/////////////////////////////////////////////////////////



///// APPARITION DU TITRE ///////////////////////////////
/* First loading */
document.getElementById("fade").style.opacity = '1';
/////////////////////////////////////////////////////////