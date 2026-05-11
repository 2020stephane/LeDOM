//===========================================================
//    FICHIER : tp3.js
//    PROJET  : LeDOM
//    DATE    : 10/04/2026
//    AUTEUR  : Stephane Brisse
//===========================================================
function testDomTp3() {

// document.querySelector("h1").style.setProperty("color", "rgb(0,255,0)");
// document.querySelector("#p2").style.setProperty("--macouleur", "blue");


const ptr = document.querySelector("p");
ptr.classList.replace("p_actif","p_inactif");
document.querySelector("p").classList.add("p_ajout");
setTimeout(() => {
         document.querySelector("p").classList.remove("p_inactif");
}, 5000);

// document.querySelector("p").classList.toggle("p_actif");
}
