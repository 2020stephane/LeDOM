//===========================================================
//    FICHIER : tp2.js
//    PROJET  : LeDOM
//    DATE    : 10/04/2026
//    AUTEUR  : Stephane Brisse
//===========================================================
function testDomTp2() {
     const new_ref = document.createElement("p");
     new_ref.textContent = "nouveau paragraphe";
     const papa = document.querySelector("main");
     papa.append("du texte", new_ref);

     // new_ref.remove();


// const new_ref1 = document.createElement("p");
// new_ref1.textContent = "paragraphe beforebegin";
// document.querySelector("main").insertAdjacentElement("beforebegin", new_ref1);

// const new_ref2 = document.createElement("p");
// new_ref2.textContent = "paragraphe afterbegin";
// document.querySelector("main").insertAdjacentElement("afterbegin", new_ref2);

// const new_ref3 = document.createElement("p");
// new_ref3.textContent = "paragraphe beforeend";
// document.querySelector("main").insertAdjacentElement("beforeend", new_ref3);

// const new_ref4 = document.createElement("p");
// new_ref4.textContent = "paragraphe afterend";
// document.querySelector("main").insertAdjacentElement("afterend", new_ref4);

// const new_ref5 = document.createElement("p");
// new_ref5.textContent = "paragraphe before";
// const insert = document.querySelector("p:nth-child(2)");
// insert.before(new_ref5);
// const clone = new_ref5.cloneNode(true);
// clone.textContent = "paragraphe after";
// insert.after(clone);
}
