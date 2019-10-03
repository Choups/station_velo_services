/////  MODAL FORM ///////////////////////////////////////

/* DOM shortcuts */
const buttonForm = document.getElementById("button-contact");
const buttonSend = document.getElementById("button-send");
const modalForm = document.getElementById("modal");

/* Function */
const modalFormFunction = () => {
    if (modalForm.style.display === "" || modalForm.style.display === "none") {
        modalForm.style.display = "block";
    } else {
        modalForm.style.display = "none";
    }
};

/* EventListener */
buttonForm.addEventListener("click", modalFormFunction);
buttonSend.addEventListener("click", modalFormFunction);
/////////////////////////////////////////////////////////

///// TOP/BOTTOM NAVBAR AFTER SCROLLING 100VH ///////////

/* DOM shortcuts */
const navBar = document.getElementById("nav");
const carousel = document.getElementById("carousel");
const foot = document.getElementById("foot");
const logoDefault = document.getElementById("logo");
const logoUp = document.getElementById("logo-top");

/* Function */
const toggleNavbar = () => {
    if (window.scrollY >= carousel.offsetHeight) {
        navBar.style.marginTop = `${carousel.offsetHeight - 40}px`;
        foot.style.marginBottom = "40px";
        navBar.style.transitionDuration = "1s";
        navBar.style.boxShadow = "0 -0.3em 0.5em black";
        logoDefault.style.display = "none";
        logoUp.style.display = "flex";
    } else {
        navBar.style.marginTop = "";
        navBar.style.boxShadow = "0 0.3em 0.5em rgb(1, 97, 97)";
        logoDefault.style.display = "flex";
        logoUp.style.display = "none";
    }
};

/* EventListener */
document.addEventListener("scroll", toggleNavbar);
/////////////////////////////////////////////////////////

///// APPARITION DU TITRE ///////////////////////////////
/* First loading */
document.getElementById("fade").style.opacity = "1";
/////////////////////////////////////////////////////////

///// OBJETS STAFF //////////////////////////////////////
class Staff {
    constructor(name, img, text, hobbies, divName) {
        (this.name = name),
            (this.img = img),
            (this.text = text),
            (this.hobbies = hobbies),
            (this.divName = divName);
    }
}

const jujuStaff = new Staff(
    "Julie",
    "juju1.jpg",
    `« Pratiquant le vélo seule (compét') ou en
groupe depuis toujours, c’est toujours un
plaisir de conseiller les érudits ainsi que les
novices entrant chez Vélo station service. »`,
    "VTC, VTT depuis 20 ans",
    "jujudiv"
);

const maxStaff = new Staff(
    "Maxime",
    "max1.jpg",
    `« En réparant leur 2 roues je me dis que je
leur permet de continuer leur chemin, de
continuer a découvrir les villes et les
campagnes. Je leur permet de continuer a être
libre »`,
    "BMX depuis 11ans",
    "maxdiv"
);

const alexStaff = new Staff(
    "Alex",
    "alex1.jpg",
    `« Le velo est pour moi une philosophie de vie.
Station vélo service est un moyen de partager
cette philosophie, à tous les amoureux de la
selle ainsi qu’aux futurs. »`,
    "VTC depuis 15ans",
    "alexdiv"
);

const staff = [jujuStaff, maxStaff, alexStaff];
//////------------------------------------------------///////////
// INJECTION DANS LE DOM DES OBJETS STAFF AVEC UNE BOUCLE FOR ///
const div_wrap = document.getElementById("divwrap");

for (let i = 0; i < staff.length; i++) {
    const objStaff = staff[i];
    div_wrap.innerHTML += `
        <article>
            <div id="${objStaff.divName}">
                <img src="img/${objStaff.img}" alt="${objStaff.name}"/>
            </div>
            <p>
                <strong>${objStaff.name}</strong>
                <br />
                <br />
                <em>
                ${objStaff.text}
                </em>
                <br />
                <br />
                ${objStaff.hobbies}
            </p>
        </article>`;
}
//////////////////////////////////////////////////////////////////
///// OBJETS SERVICES ////////////////////////////////////////////
class Services {
    constructor(name, img, text) {
        (this.name = name), (this.img = img), (this.text = text);
    }
}

const repar = new Services(
    "Réparation",
    "repar.jpg",
    `<p>
Nous nous engageons à mettre toutes nos compétences
techniques afin d’effectuer la réparation de votre 2
roues dans les meilleurs délais possible avec une
qualité irréprochable.
</p>
<p>
Nous vous proposons ainsi 2 types de reparations:
Une formule VIP qui comprend main d’oeuvre et la
pièce. Ou une formule classique qui comprend
uniquement la main d’oeuvre.
</p>`
);

const locat = new Services(
    "Location",
    "loc.jpg",
    `<p>
    La location concerne les vélos (avec l’antivol)
    ainsi que les casques.
</p>
<p>
    Vous pourrez les louer à la 1/2 journée ou la
    journée complète.
</p>
<p>
    Les véhicules vous seront adaptés afin que votre
    expérience soit la plus agréable possible.
</p>`
);

const vente = new Services(
    "Vente",
    "vente.jpg",
    `<p>
    Nous saurons écouter vos attentes afin de vous
    proposer le meilleur choix pour VOUS. Cela s’étend
    de la vente d’un vélo jusqu’a ses accessoires avec
    toujours des conseils adapté pour vous. Concernant
    les accessoires nous vous proposons des casques, des
    béquilles, antivol, selle et kit de frein.
</p>
<p>
    Nous faisons le choix de proposer peut d’accessoire
    afin de pouvoir vous conseiller au mieux.
</p>`
);

const atelier = new Services(
    "Ateliers",
    "atelier.jpg",
    `<p>
    Les ateliers de réparations sont des cours afin que
    vous soyez capable d’effectuer certaines réparations
    par vous même.
</p>
<p>
    Il est toujours plus agréable de savoir mettre une
    rustine sur sa roue afin de terminer son trajet.
</p>
<p>
    Un maximum de 5 personnes afin de conserver un
    esprit funky
</p>`
);

const servicesArr = [repar, locat, vente, atelier];
//////////////////////////////////////////////////////////////
// INJECTION DANS LE DOM DES OBJETS SERVICES AVEC UNE BOUCLE FOR ///
const div_services = document.getElementById("article");

for (let i = 0; i < servicesArr.length; i++) {
    const objService = servicesArr[i];
    div_services.innerHTML += `
    <article>
    <h3>${objService.name}</h3>
    <img src="img/${objService.img}" alt="${objService.name}" />
    ${objService.text}
</article>
    
    `;
}
