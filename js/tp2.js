//===========================================================
//    FICHIER : tp2.js
//    PROJET  : LeDOM
//    DATE    : 10/04/2026
//    AUTEUR  : Stephane Brisse
//===========================================================
function testDomTp2() {
     const new_ref = document.createElement("p");
     new_ref.textContent = "paragraphe afterbegin";

document.querySelector("main").insertAdjacentElement("afterbegin", new_ref);

const new_ref1 = document.createElement("p");
     new_ref1.textContent = "paragraphe beforebegin";

document.querySelector("main").insertAdjacentElement("beforebegin", new_ref1);

const new_ref2 = document.createElement("p");
     new_ref2.textContent = "paragraphe beforeend";

document.querySelector("main").insertAdjacentElement("beforeend", new_ref2);

const new_ref3 = document.createElement("p");
   new_ref3.textContent = "paragraphe afterend";

document.querySelector("main").insertAdjacentElement("afterend", new_ref3);

// const new_ref4 = document.createElement("p");
//    new_ref4.textContent = "paragraphe inserer";
// const parent =  document.querySelector("main");
// const insert = document.querySelector("p:nth-child(2)");
// parent.insertBefore("new_ref4, insert");
}
