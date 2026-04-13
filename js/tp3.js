//===========================================================
//    FICHIER : tp3.js
//    PROJET  : LeDOM
//    DATE    : 10/04/2026
//    AUTEUR  : Stephane Brisse
//===========================================================
function testDomTp3() {

document.querySelector("h1").style.setProperty("color", "rgb(0,255,0)");
document.querySelector("#p2").style.setProperty("--macouleur", "blue");


document.querySelector("p").classList.replace("p_actif","p_inactif");
document.querySelector("p").classList.add("p_ajout");
//  document.querySelector("p").classList.remove("p_inactif");
document.querySelector("p").classList.toggle("p_ajout");
}
