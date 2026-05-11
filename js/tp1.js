//===========================================================
//    FICHIER : LeDOM.js
//    PROJET  : LeDOM
//    DATE    : 06/04/2026
//    AUTEUR  : Stephane Brisse
//===========================================================
function testDomTp1() {

     const ref_1 = document.querySelector("p");

     ref_1.innerText = `<strong>modifie</strong>`;
     console.log(ref_1);
typeof ref_1;
// const ref_2 = document.querySelector(".class_p2");
//      ref_2.textContent = `paragraphe modifie`;
//      const ref_2 = document.querySelector("p");
// ref_2.textContent = "paragraphe <strong>modifie</strong>";

//      const ref_3 = document.querySelector("#id_p3");
// ref_3.innerHTML = "paragraphe <strong>modifie</strong>";
let ref_p = document.querySelectorAll("p");
console.log(ref_p);
typeof ref_p;

for (let index = 0; index < ref_p.length; index++) {

ref_p[index].textContent = "paragraphe modifié";

}

}

