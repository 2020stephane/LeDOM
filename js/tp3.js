//===========================================================
//    FICHIER : tp3.js
//    PROJET  : LeDOM
//    DATE    : 10/04/2026
//    AUTEUR  : Stephane Brisse
//===========================================================
function testDomTp3() {
     const ref_h1 = document.querySelector("h1");
 ref_h1.style.setProperty("color", "rgb(0,255,0)");

 document.querySelector("h2").style.setProperty("color", "red");
 document.querySelector("p").style.setProperty("color", "#000");

 document.querySelector("p").classList.replace("p_actif","p_inactif");
}
