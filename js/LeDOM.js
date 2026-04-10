//===========================================================
//    FICHIER : LeDOM.js
//    PROJET  : LeDOM
//    DATE    : 06/04/2026
//    AUTEUR  : Stephane Brisse
//===========================================================
function testDomTp1() {

     const ref_h1 = document.querySelector("h1");
ref_h1.textContent = "titre modifie";

//      const ref_p1 = document.querySelector("p");
// ref_p1.textContent = "paragraphe modifie";

//      const ref_p2 = document.querySelector(".class_p2");
// ref_p2.innerHTML = "paragraphe <strong>modifie</strong>";

//      const ref_p3 = document.querySelector("#id_p3");
// ref_p3.textContent = "paragraphe <strong>modifie</strong>";

     const ref_p = document.querySelectorAll("p");
ref_p[0].textContent = "paragraphe1 modifié";
ref_p[1].textContent = "paragraphe2 modifié";
ref_p[2].textContent = "paragraphe3 modifié";


}

