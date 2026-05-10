//===========================================================
//    FICHIER : tp4.js
//    PROJET  : LeDOM
//    DATE    : 10/04/2026
//    AUTEUR  : Stephane Brisse
//===========================================================
function testDomTp4() {
     const ref_h1 = document.querySelector("h1");
     ref_h1.addEventListener("click", () => mafonction1(ref_h1));

     const ref_li =document.querySelector(".main_ul");
     ref_li.addEventListener("click", (event) => mafonction2(event, ref_li));
}

function mafonction1(ref_h1) {
     ref_h1.textContent = "titre h1 modifie";
}

function mafonction2(event, ref_li) {
     const elementClique = event.target;
     const elementavececouteur = event.currentTarget;
                // LI en majuscule
    if (elementClique.tagName === "LI") {
        const id = elementClique.dataset.numero;

        elementClique.textContent = `LI n°${id} modifié ! par un evenement sur ${elementavececouteur.tagName}`;
        elementClique.style.color = "red";
    }
}
