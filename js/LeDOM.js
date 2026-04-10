//===========================================================
//    FICHIER : LeDOM.js
//    PROJET  : LeDOM
//    DATE    : 06/04/2026
//    AUTEUR  : Stephane Brisse
//===========================================================
function testDom() {
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

//      const new_ref = document.createElement("p");
//      new_ref.textContent = "paragraphe afterbegin";

// document.querySelector("header").insertAdjacentElement("afterbegin", new_ref);

// const new_ref1 = document.createElement("p");
//      new_ref1.textContent = "paragraphe beforebegin";

// document.querySelector("header").insertAdjacentElement("beforebegin", new_ref1);

// const new_ref2 = document.createElement("p");
//      new_ref2.textContent = "paragraphe beforeend";

// document.querySelector("header").insertAdjacentElement("beforeend", new_ref2);

// const new_ref3 = document.createElement("p");
//    new_ref3.textContent = "paragraphe afterend";

// document.querySelector("header").insertAdjacentElement("afterend", new_ref3);

const new_ref4 = document.createElement("p");
   new_ref4.textContent = "paragraphe inserer";
const parent =  document.querySelector("header");
const insert = document.querySelector("p:nth-child(2)");
parent.insertBefore("new_ref4, insert");
}

