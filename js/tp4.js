//===========================================================
//    FICHIER : tp4.js
//    PROJET  : LeDOM
//    DATE    : 10/04/2026
//    AUTEUR  : Stephane Brisse
//===========================================================
function testDomTp4() {
     const ref_h1 = document.querySelector("h1");
     ref_h1.addEventListener("click",mafonction(ref_h1));
}
function mafonction(ref_h1) {
     ref_h1.textContent = "titre modifie";
}
