/////////////////  MODAL FORM /////////////////////////////////////////

const buttonForm = document.getElementById('button-contact');
const buttonSend = document.getElementById('button-send');
const modalForm = document.getElementById('modal');

const modalFormFunction = () => {
    if (modalForm.style.display === "" || modalForm.style.display === "none") {
        modalForm.style.display = "block";        
    } else {
        modalForm.style.display = "none";
    }
 };

buttonForm.addEventListener('click', modalFormFunction);
buttonSend.addEventListener('click', modalFormFunction);

///////////////////////////////////////////////////////////////////////

//////////////////// TOP/BOTTOM NAVBAR AFTER SCROLL 100VH /////////////////
const navBar = document.getElementById('nav');
const carousel = document.getElementById('carousel');
const foot = document.getElementById('foot');

const toggleNavbar = () => {
    if (window.scrollY > carousel.offsetHeight){
        navBar.style.marginTop = `${carousel.offsetHeight - 40}px`;
        foot.style.marginBottom = '40px';
        navBar.style.transitionDuration = '1s';
        navBar.style.boxShadow = '0 -0.3em 0.5em black';
    } else{
        navBar.style.marginTop = '';
        navBar.style.boxShadow = '0 0.3em 0.5em teal';
    }
}
document.addEventListener('scroll', toggleNavbar);
//////////////////////////// APPARITION DU TITRE //////////////////////////////
document.getElementById("fade").style.opacity = '1';
///////////////////////////////////////////////////////////////////////////////